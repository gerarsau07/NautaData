"use client";

import { useState } from 'react';

// =================================================================
// Componente de Barra Interactiva (Visualización tipo Gráfica de Barra)
// =================================================================
const ControlBarra = ({ label, value, unit, min, max, step, onChange, colorClass }) => {
  // Calcular el porcentaje para la barra de visualización
  const percentage = ((value - min) / (max - min)) * 100;
  
  // Mapeo de color para el estilo del fondo de la barra
  const barColor = colorClass.includes('purple') 
    ? 'bg-purple-500' 
    : colorClass.includes('green') 
    ? 'bg-green-500' 
    : colorClass.includes('orange') 
    ? 'bg-orange-500' 
    : 'bg-red-500';

  return (
    <div className="mb-6 p-3 border border-gray-200 rounded-lg bg-white shadow-md">
      {/* Etiqueta y Valor */}
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className={`text-xl font-bold ${colorClass}`}>{value} {unit}</span>
      </div>

      {/* Contenedor de la Barra - Usamos el input[type="range"] para la lógica de arrastre */}
      <div className="relative h-6 bg-gray-100 rounded-md">
        
        {/* Barra Visual (simula la gráfica) */}
        <div 
          className={`absolute top-0 left-0 h-full rounded-md ${barColor} transition-all duration-100 ease-linear`}
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Input de Rango - Se superpone de forma transparente para la funcionalidad de arrastre */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          // Estilos para hacerlo invisible pero funcional
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        />

        {/* Indicador de Valor sobre la barra (opcional, ayuda a la visualización) */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 h-full flex items-center justify-center text-xs font-semibold text-white pointer-events-none"
          style={{ left: `max(5px, ${percentage}%)`, transform: `translate(-50%, -50%)` }}
        >
          {/* El indicador solo se muestra si el valor no está al 0% */}
          {percentage > 5 && <span className="p-1 px-2 rounded-full bg-gray-900/60">{value}</span>}
        </div>

      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{min}{unit}</span>
          <span>{max}{unit}</span>
      </div>
    </div>
  );
};


// =================================================================
// Componente Principal
// =================================================================
export default function Verificar() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  // Nuevo estado para los resultados simulados que el usuario ajusta
  const [simulatedResults, setSimulatedResults] = useState(null); 

  // Funciones de Generación y Simulación
  
  const generateRandomResults = () => ({
    calidadGeneral: (Math.random() * 1).toFixed(3),
    estado: ['High', 'Good', 'Moderate', 'Poor', 'Bad'][Math.floor(Math.random() * 5)],
    nutrientes: (Math.random() * 100).toFixed(1),
    contaminacionOrganica: (Math.random() * 100).toFixed(1),
    metales: (Math.random() * 50).toFixed(1),
    oxigeno: (Math.random() * 15).toFixed(1), // Rango: 0 a 15
    turbidez: (Math.random() * 100).toFixed(1),
    ph: (6 + Math.random() * 3).toFixed(1), // Rango: 6 a 9
    conductividad: (100 + Math.random() * 900).toFixed(0) // Rango: 100 a 1000
  });

  const handleFileUpload = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setFileUploaded(true);
      setIsLoading(false);
      
      const randomResults = generateRandomResults();
      setResults(randomResults);
      // Inicializar los resultados simulados con los resultados generados
      setSimulatedResults(randomResults); 
    }, 2000);
  };
  
  const predictStatusBasedOnSimulation = (newResults) => {
    // Lógica de simulación simple para cambiar el estado basado en valores clave
    const { oxigeno, ph, conductividad } = newResults;
    let score = 0;

    // 1. Oxígeno (Idealmente entre 7 y 12 mg/L)
    if (oxigeno >= 7 && oxigeno <= 12) score += 3;
    else if (oxigeno > 4 && oxigeno < 15) score += 1;
    
    // 2. pH (Idealmente entre 6.5 y 8.5)
    if (ph >= 6.5 && ph <= 8.5) score += 3;
    else if (ph > 5 && ph < 9.5) score += 1;
    
    // 3. Conductividad (Idealmente baja, menos de 500 µS/cm)
    if (conductividad < 500) score += 3;
    else if (conductividad < 1000) score += 1;

    // Asignar estado basado en la puntuación:
    if (score >= 8) return { estado: 'High', calidadGeneral: (Math.random() * 0.2 + 0.8).toFixed(3) };
    if (score >= 6) return { estado: 'Good', calidadGeneral: (Math.random() * 0.2 + 0.6).toFixed(3) };
    if (score >= 4) return { estado: 'Moderate', calidadGeneral: (Math.random() * 0.2 + 0.4).toFixed(3) };
    if (score >= 2) return { estado: 'Poor', calidadGeneral: (Math.random() * 0.2 + 0.2).toFixed(3) };
    return { estado: 'Bad', calidadGeneral: (Math.random() * 0.2 + 0.0).toFixed(3) };
  };

  const handleSliderChange = (paramKey, newValue) => {
    if (!simulatedResults) return;

    // 1. Actualizar el valor del parámetro
    const updatedResults = {
      ...simulatedResults,
      [paramKey]: parseFloat(newValue.toFixed(paramKey === 'conductividad' ? 0 : 1))
    };

    // 2. Simular la predicción con los nuevos valores
    const newPrediction = predictStatusBasedOnSimulation(updatedResults);
    
    // 3. Actualizar el estado con los nuevos valores y la nueva predicción
    setSimulatedResults({
      ...updatedResults,
      estado: newPrediction.estado,
      calidadGeneral: newPrediction.calidadGeneral,
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      'High': 'text-purple-600 bg-purple-100',
      'Good': 'text-green-600 bg-green-100',
      'Moderate': 'text-orange-600 bg-orange-100',
      'Poor': 'text-red-600 bg-red-100',
      'Bad': 'text-red-800 bg-red-100'
    };
    return colors[status] || 'text-gray-600 bg-gray-100';
  };
  
  const getSliderColorClass = (status) => {
    if (status === 'High') return 'text-purple-600';
    if (status === 'Good') return 'text-green-600';
    if (status === 'Moderate') return 'text-orange-600';
    return 'text-red-600';
  }


  // =================================================================
  // JSX del Componente
  // =================================================================
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center w-full bg-blue-500 p-6 rounded-lg border border-blue-100">
          <h1 className="text-4xl font-bold text-white mb-4">Monitoreo de Calidad de Agua</h1>
          <p className="text-xl  text-white max-w-3xl mx-auto">
            Utiliza nuestro modelo predictivo para analizar la calidad del agua basado en muestras de diatomeas.
          </p>
        </div>

        {/* Cuadrícula Principal: 1 columna (datos) y 2 columnas (resultados/mapa) en pantallas grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Columna izquierda (1/3) - Subida de datos */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sube tus Datos de Diatomeas</h2>
            
            {!fileUploaded ? (
              <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-8 text-center transition-all duration-300 hover:border-blue-300">
                <svg className="w-12 h-12 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-600 mb-4">Arrastra y suelta tu archivo CSV con los datos de diatomeas</p>
                <button 
                  onClick={handleFileUpload}
                  disabled={isLoading}
                  className={`font-medium py-3 px-6 rounded-lg transition duration-300 ${
                    isLoading 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {isLoading ? 'Procesando...' : 'Seleccionar Archivo'}
                </button>
                <p className="text-gray-500 text-sm mt-2">Formatos soportados: .csv, .xlsx</p>
              </div>
            ) : (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-700 font-semibold mb-2">✓ Archivo cargado correctamente</p>
                <p className="text-gray-600 text-sm">datos_diatomeas.csv</p>
                <button 
                  onClick={() => {
                    setFileUploaded(false);
                    setResults(null);
                    setSimulatedResults(null);
                  }}
                  className="mt-4 text-blue-500 hover:text-blue-600 font-medium"
                >
                  Cargar otro archivo
                </button>
              </div>
            )}

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Requisitos de los Datos</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Columnas con nombres científicos de especies de diatomeas</li>
                <li>Datos en formato numérico (conteos o porcentajes)</li>
                <li>Mínimo 15 especies diferentes para análisis confiable</li>
                <li>Incluir información de ubicación y fecha de muestreo</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">¿No tienes datos de diatomeas?</h3>
              <p className="text-gray-600 mb-4">
                Podemos ayudarte a establecer un programa de monitoreo o conectar con laboratorios especializados.
              </p>
              <button className="text-blue-500 hover:text-blue-600 font-medium flex items-center">
                Solicitar asesoría para muestreo
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Columna derecha (2/3) - Resultados y Gráfica Interactiva y Mapa */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Diagnóstico y Simulación de Calidad</h2>
            
            {!fileUploaded ? (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-500">Los resultados aparecerán aquí después de subir y procesar el archivo.</p>
                </div>
              </div>
            ) : (
              // Vista de Resultados (Incluye los sliders como barras)
              <div className="bg-white border border-green-200 rounded-lg p-6 mb-6 shadow-xl">
                <div className="text-center mb-6 border-b pb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Resultado de Calidad (Simulado)</h3>
                  <div className="flex items-center justify-center my-4">
                    <div className={`px-5 py-2 rounded-full ${getStatusColor(simulatedResults?.estado)} font-extrabold text-lg`}>
                      Estado: {simulatedResults?.estado}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    <span className="text-lg font-bold text-gray-900">{simulatedResults?.calidadGeneral}</span> IBD_EQR
                  </p>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4">Ajuste de Parámetros (Gráfica Interactiva)</h3>
                
                {/* Componentes ControlBarra (Sliders) */}
                {simulatedResults && (
                  <>
                    <ControlBarra
                      label="Oxígeno Disuelto"
                      value={simulatedResults.oxigeno}
                      unit="mg/L"
                      min={1}
                      max={15}
                      step={0.1}
                      colorClass={getSliderColorClass(simulatedResults.estado)}
                      onChange={(val) => handleSliderChange('oxigeno', val)}
                    />
                    <ControlBarra
                      label="pH"
                      value={simulatedResults.ph}
                      unit=""
                      min={5}
                      max={10}
                      step={0.1}
                      colorClass={getSliderColorClass(simulatedResults.estado)}
                      onChange={(val) => handleSliderChange('ph', val)}
                    />
                    <ControlBarra
                      label="Conductividad"
                      value={simulatedResults.conductividad}
                      unit="μS/cm"
                      min={100}
                      max={1000}
                      step={10}
                      colorClass={getSliderColorClass(simulatedResults.estado)}
                      onChange={(val) => handleSliderChange('conductividad', val)}
                    />
                  </>
                )}
                <p className="text-xs text-gray-500 mt-4 text-center">
                    Arrastra el valor de cada barra para simular su impacto en el estado de calidad del agua.
                </p>
              </div>
            )}
            
            {/* Mapa Integrado - AHORA CON IFRAME (Ancho completo de la columna 2/3 y altura de 500px) */}
            <div className="mb-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-green-50 border-b border-green-200 p-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Mapa de Calidad de Agua - Visualización de Coordenadas
                </h3>
              </div>
              <div className="p-4">
                {!fileUploaded ? (
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 text-center">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <div>
                        <p className="text-gray-700 font-medium mb-2">Mapa Interactivo de Calidad del Agua</p>
                        <p className="text-gray-500 text-sm">
                          Al procesar tus datos, se cargará el mapa de coordenadas reales.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // CONTENEDOR DEL IFRAME: Aumento de altura a 500px. El ancho es 100% de la columna 2/3.
                  <div className="border-2 border-gray-300 rounded-lg overflow-hidden h-[500px] w-full">
                    <iframe 
                      src="/mapa_coordenadas_reales.html" 
                      title="Mapa de Coordenadas Reales"
                      className="w-full h-full border-0"
                    >
                      Tu navegador no soporta iframes.
                    </iframe>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>

        {/* Tabla de Parámetros - Siempre visible */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Parámetros que Analizamos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center p-2 bg-white rounded-lg border border-blue-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">Índice de Calidad General </span>
            </div>
            <div className="flex items-center p-2 bg-white rounded-lg border border-blue-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">Niveles de Nutrientes</span>
            </div>
            <div className="flex items-center p-2 bg-white rounded-lg border border-blue-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">Contaminación Orgánica</span>
            </div>
            <div className="flex items-center p-2 bg-white rounded-lg border border-blue-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">Presencia de Metales</span>
            </div>
            <div className="flex items-center p-2 bg-white rounded-lg border border-blue-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">Oxígeno Disuelto</span>
            </div>
            <div className="flex items-center p-2 bg-white rounded-lg border border-blue-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">Turbidez</span>
            </div>
          </div>
        </div>

        {/* Sección informativa */}
        <div className="mt-12 bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo Funciona Nuestro Modelo Predictivo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Recolección de Muestras</h3>
              <p className="text-gray-600 text-sm">Se recolectan muestras de diatomeas en el cuerpo de agua</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Identificación de Especies</h3>
              <p className="text-gray-600 text-sm">Se identifican y cuantifican las especies de diatomeas presentes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Predicción de Calidad</h3>
              <p className="text-gray-600 text-sm">Nuestro modelo correlaciona las diatomeas con parámetros de calidad</p>
            </div>
          </div>
          <p className="text-gray-600">
            Nuestro sistema utiliza un modelo de machine learning entrenado con miles de muestras de diatomeas 
            y sus correspondientes análisis físico-químicos. Las diatomeas son bioindicadores excelentes de la 
            calidad del agua, ya que diferentes especies prosperan en condiciones específicas de pH, nutrientes, 
            contaminantes y otros parámetros.
          </p>
        </div>
      </div>
    </div>
  );
}