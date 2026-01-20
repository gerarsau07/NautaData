import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Diagnóstico y Simulación para la <span className="text-amber-200">Gestión Hídrica Sostenible</span>
            </h1>
            <p className="text-xl text-white font-bold mb-10 max-w-3xl mx-auto">
              Transformamos datos de diatomeas en diagnósticos precisos de calidad del agua y simulaciones de impacto ecológico para la toma de decisiones informadas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/verificar" 
                className="bg-white  hover:bg-gray-100 text-shadow-black border border-blue-500 font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Diagnóstico y Simulación
              </Link>
              <Link 
                href="/about" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                
              >
                Conoce Nuestra Tecnología
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">El Desafío de la Calidad del Agua en Puebla</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Los ríos Atoyac y Alseseca enfrentan graves problemas de contaminación que afectan la salud pública y los ecosistemas.
              La CONAGUA tiene 130 sitios de monitoreo para medir la calidad del agua de los ríos de la cuenca, y según sus datos (SINA, 2023), el agua está contaminada en el 96% de los sitios, siendo particularmente tóxica en la zona metropolitana de Puebla.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contaminación Industrial</h3>
              <p className="text-gray-600">
                Descargas de metales pesados y compuestos químicos de la industria textil y automotriz.
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vertidos Urbanos</h3>
              <p className="text-gray-600">
                Aguas residuales domésticas sin tratamiento adecuado aumentan los niveles de nutrientes y patógenos.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoreo Ineficiente</h3>
              <p className="text-gray-600">
                Métodos tradicionales de análisis químico son lentos, costosos y no permiten una respuesta rápida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nuestra Solución: Bioindicadores y Machine Learning</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Utilizamos diatomeas como bioindicadores naturales y modelos predictivos para un diagnóstico rápido y preciso
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué Diatomeas?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Sensibles a cambios en la calidad del agua</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Diversidad específica según condiciones ambientales</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Respuesta rápida a perturbaciones</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Fáciles de recolectar y analizar</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beneficios del Enfoque</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Reducción de costos de análisis</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">-70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tiempo de diagnóstico</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Horas vs. semanas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cobertura de monitoreo</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">+300%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Capacidad predictiva</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Escenarios futuros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para transformar la gestión del agua?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a municipios y organizaciones que ya están utilizando nuestra plataforma para proteger sus recursos hídricos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Solicitar Demostración
            </Link>
            <Link 
              href="/verificar" 
              className="bg-transparent hover:bg-blue-600 text-white border border-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Probar Diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}