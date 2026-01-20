import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.feature_selection import SelectFromModel
from sklearn.linear_model import Ridge
from sklearn.base import clone
import lightgbm as lgb
from sklearn.ensemble import RandomForestRegressor, StackingRegressor
from catboost import CatBoostRegressor
import joblib
import warnings


def load_and_prepare_data(training_csv_path='03_IBD_GTstudentproject_train.csv'):
    print(f"Cargando datasets y archivo de entrenamiento: '{training_csv_path}'")
    diatom_inventories = pd.read_csv('01_DiatomInventories_GTstudentproject_B.csv')
    sites_info = pd.read_csv('02_InfoSites_GTstudentproject_B.csv')
    try:
        ibd_data = pd.read_csv(training_csv_path)
    except FileNotFoundError:
        print(f" ERROR: No se encontró el archivo '{training_csv_path}'.")
        return None

    df = ibd_data.copy()
    df['CodeSite'] = df['SamplingOperations_code'].str.split('_').str[0].astype(str)
    sites_info['CodeSite_SamplingOperations'] = sites_info['CodeSite_SamplingOperations'].astype(str)

    df = df.merge(diatom_inventories.pivot_table(index='SamplingOperations_code', columns='TaxonCode', values='Abundance_pm', fill_value=0), on='SamplingOperations_code', how='left')
    df = df.merge(sites_info, left_on='CodeSite', right_on='CodeSite_SamplingOperations', how='left')

    df = df.loc[:, ~df.columns.duplicated()]
    df.dropna(subset=['IBD_EQR'], inplace=True)
    print("Datos de ENTRENAMIENTO cargados y preparados.")
    return df

def main():
    print(" ENTRENANDO MODELO")

    df = load_and_prepare_data()
    if df is None:
        return

    print("Preparando datos para el entrenamiento final.")
    exclude_cols = ['SamplingOperations_code', 'CodeSite_SamplingOperations', 'IBD', 'IBD_EQR', 'IBD_EQR_Status', 'CodeSite']
    X = df.drop(columns=[col for col in exclude_cols if col in df.columns], errors='ignore')
    y_reg = df['IBD_EQR']

    safe_categorical = [col for col in X.select_dtypes(include=['object', 'category']).columns]
    X = pd.get_dummies(X, columns=safe_categorical, dummy_na=True, drop_first=True)

    target_map = {'Bad': 0, 'Poor': 1, 'Moderate': 2, 'Good': 3, 'High': 4}

    assistant_pipeline_base = Pipeline([
        ('imputer', SimpleImputer(strategy='median')),
        ('selector', SelectFromModel(lgb.LGBMRegressor(random_state=42, n_estimators=100), threshold='median')),
        ('scaler', StandardScaler()),
        ('regressor', CatBoostRegressor(
            random_state=42, iterations=1000, learning_rate=0.03, depth=8,
            loss_function='MAE', eval_metric='MAE',
            early_stopping_rounds=50, verbose=0
        ))
    ])

    estimators_base = [
        ('lgbm', lgb.LGBMRegressor(random_state=42, n_estimators=1500, learning_rate=0.02, min_child_samples=5, num_leaves=31, reg_alpha=0.1, reg_lambda=0.1)),
        ('rf', RandomForestRegressor(random_state=42, n_estimators=300, max_depth=15, n_jobs=-1)),
        ('ridge', Ridge(random_state=42)),
        ('cat', CatBoostRegressor(
            random_state=42, iterations=2000, learning_rate=0.03, depth=8,
            l2_leaf_reg=3, loss_function='RMSE', eval_metric='RMSE',
            early_stopping_rounds=50, verbose=0
        ))
    ]
    stacking_regressor_base = StackingRegressor(
        estimators=estimators_base,
        final_estimator=lgb.LGBMRegressor(random_state=42, n_estimators=500, learning_rate=0.05),
        cv=3,
        n_jobs=-1
    )
    final_pipeline_base = Pipeline([
        ('imputer', SimpleImputer(strategy='median')),
        ('selector', SelectFromModel(lgb.LGBMRegressor(random_state=42, n_estimators=100), threshold='median')),
        ('scaler', StandardScaler()),
        ('stacking', stacking_regressor_base)
    ])

    print("\n  INICIANDO ENTRENAMIENTO FINAL ")
    assistant_pipeline_final = clone(assistant_pipeline_base)
    assistant_pipeline_final.fit(X, y_reg)
    print("Asistente (Etapa 1) entrenado.")

    print("Generando meta-característica para la Etapa 2")
    y_pred_reg_assistant_full = assistant_pipeline_final.predict(X)
    X_enhanced_full = X.copy()
    X_enhanced_full["eqr_pred_assistant"] = y_pred_reg_assistant_full
    train_columns_final = X_enhanced_full.columns.tolist()

    print("\n  INICIANDO ENTRENAMIENTO FINAL")
    final_pipeline_final = clone(final_pipeline_base)
    final_pipeline_final.fit(X_enhanced_full, y_reg)
    print("Comité de expertos (Etapa 2) entrenado.")

    model_data = {
        'assistant_pipeline': assistant_pipeline_final,
        'final_pipeline': final_pipeline_final,
        'train_columns': train_columns_final,
        'target_map': target_map
    }
    output_filename = 'modelo_FinalTecnoBuhos.pkl'
    joblib.dump(model_data, output_filename)
    print(f"\n Modelo Final guardado como: '{output_filename}'!")

if __name__ == "__main__":
    main()
