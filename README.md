NautaData: Monitoreo Ecológico de la Calidad del Agua 🌊🔬

Este repositorio contiene el ecosistema de procesamiento de datos y modelos de aprendizaje automático diseñados para la evaluación de la calidad ecológica del agua. El proyecto utiliza indicadores biológicos (diatomeas) y parámetros físico-químicos para predecir el índice IBD (Índice Biológico de Diatomeas) y el estatus EQR (Ecological Quality Ratio).
 Descripción del Proyecto

NautaData implementa un pipeline avanzado de Ciencia de Datos para automatizar la clasificación del estado ecológico de los cuerpos de agua, dividiéndolos en cinco categorías: Bad, Poor, Moderate, Good y High.

El modelo destaca por su arquitectura de dos etapas, diseñada para capturar la naturaleza ordinal de los datos biológicos y optimizar la precisión en clases desbalanceadas.
Características Técnicas

    Arquitectura de Modelado:

        Etapa 1 (Asistente Ordinal): Un CatBoostRegressor optimizado con función de pérdida MAE para entender la jerarquía entre los estados de calidad.

        Etapa 2 (Comité de Expertos): Un StackingRegressor que integra LightGBM, Random Forest, Ridge y CatBoost para refinar la predicción numérica.

    Optimización de Umbrales: Implementación de búsqueda de umbrales dinámicos para maximizar el F1-Macro, mejorando el reconocimiento de clases minoritarias (Bad/Poor).

    Validación Robusta: Uso de StratifiedGroupKFold para evitar la fuga de datos por sitios de muestreo repetidos.

    Ingeniería de Características: Pivotado automático de inventarios taxonómicos y enriquecimiento de metadatos geográficos.

Estructura del Repositorio

    data/: (Opcional si los tienes ahí) Archivos CSV con inventarios de diatomeas e información de sitios.

    scripts/: Scripts de entrenamiento y evaluación del modelo.

    models/: Modelos entrenados guardados en formato .pkl.

    notebooks/: Análisis exploratorio de datos (EDA) y visualizaciones.

Visualización de Datos

El proyecto incluye análisis estadísticos profundos, como la distribución de los índices mediante diagramas de caja (Boxplots) para identificar valores atípicos y el sesgo de las clases biológicas.
💻 Instalación y Uso

    Clonar el repositorio:
    Bash

    git clone https://github.com/gerarsau07/NautaData.git
    cd NautaData

    Instalar dependencias:
    Bash

    pip install pandas numpy scikit-learn lightgbm catboost joblib matplotlib seaborn imbalanced-learn

    Entrenar el modelo: Ejecuta el script principal para procesar los datos y generar el modelo optimizado:
    Bash

    python modelo.py

Conclusiones del Modelo

Actualmente, el modelo alcanza un Accuracy superior al 92% en datos no vistos, con un enfoque especial en reducir la confusión entre clases adyacentes (como Moderate y Good) mediante el ajuste fino de fronteras de decisión.