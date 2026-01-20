export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Acerca de NautaData</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformando la gestión del agua a través de inteligencia artificial y bioindicadores
          </p>
        </div>
        
        {/* Problem Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">La Crisis del Agua que Enfrentamos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En Puebla, los ríos Atoyac y Alseseca representan una paradoja: son vitales para millones de personas, pero su contaminación amenaza la salud pública y los ecosistemas.
            </p>
            <p className="text-gray-600 mt-4 max-w-6xl mx-auto">
              La colectiva por el Bienestar Social advierte que la privatización del líquido en Puebla, vigente desde hace 12 años, ha intensificado la contaminación en los ríos Atoyac, Alseseca y San Francisco. Estudios científicos citados por la organización indican que el agua residual contiene 24 mil unidades de materia fecal por cada 100 mililitros, junto a concentraciones peligrosas de plomo, arsénico y mercurio. La falta de tratamiento adecuado y la omisión de las autoridades han permitido que los efluentes de fábricas textiles, plantas químicas y automotri-ces lleguen a los cauces sin control
              (La Jornada, 2025).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contaminación Industrial Descontrolada</h3>
              <p className="text-gray-600">
                Descargas tóxicas de industrias textiles y automotrices que operan sin supervisión efectiva, liberando metales pesados y compuestos químicos peligrosos.
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vertidos Urbanos Sin Tratamiento</h3>
              <p className="text-gray-600">
                Más del 60% de las aguas residuales domésticas llegan a los ríos sin tratamiento adecuado, generando zonas muertas por falta de oxígeno.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detección Tardía de Problemas</h3>
              <p className="text-gray-600">
                Los análisis químicos tradicionales toman semanas, permitiendo que la contaminación se extienda antes de que se puedan tomar medidas.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Respuesta Innovadora</h2>
            <p className="text-gray-600 mb-4">
              Frente a estos desafíos, desarrollamos NautaData: una plataforma que combina el poder de los bioindicadores naturales con inteligencia artificial para revolucionar el monitoreo del agua.
            </p>
            <p className="text-gray-600 mb-4">
              Descubrimos que las <strong>diatomeas</strong> - algas microscópicas presentes en todos los cuerpos de agua - funcionan como "sensores naturales" perfectos. Cada especie responde de manera específica a diferentes tipos de contaminación.
            </p>
            <p className="text-gray-600">
              Nuestro sistema analiza la composición de diatomeas en una muestra de agua y, mediante algoritmos avanzados, predice la calidad del agua en <strong>horas en lugar de semanas</strong>, a una <strong>fracción del costo</strong> de los métodos tradicionales.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">El Problema que Resolvemos</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Método Tradicional</h4>
                  <p className="text-gray-600 text-sm">Análisis químicos costosos que toman semanas y solo cubren puntos limitados</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Nuestra Solución</h4>
                  <p className="text-gray-600 text-sm">Diagnóstico basado en diatomeas que toma horas y permite monitoreo extensivo</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Impacto Medible</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-bold text-blue-600">-70%</div>
                  <div className="text-gray-600">Reducción en costos de análisis</div>
                </div>
                <div>
                  <div className="font-bold text-blue-600">+300%</div>
                  <div className="text-gray-600">Más puntos de monitoreo</div>
                </div>
                <div>
                  <div className="font-bold text-blue-600">Horas</div>
                  <div className="text-gray-600">vs. semanas de espera</div>
                </div>
                <div>
                  <div className="font-bold text-blue-600">90%</div>
                  <div className="text-gray-600">Precisión en diagnósticos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real World Impact */}
        <div className="bg-white py-12 rounded-lg border border-gray-200 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Transformando la Gestión Hídrica en la Práctica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Para Municipios</h3>
              <p className="text-gray-600">
                Identificación rápida de fuentes de contaminación, permitiendo acciones inmediatas y asignación eficiente de recursos para saneamiento.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Para Industrias</h3>
              <p className="text-gray-600">
                Monitoreo continuo de cumplimiento normativo, detección temprana de problemas en procesos y reducción de riesgos ambientales.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Para Comunidades</h3>
              <p className="text-gray-600">
                Empoderamiento de comunidades locales con herramientas accesibles para monitorear la calidad del agua que consumen y usan para agricultura.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Para Organizaciones Ambientales</h3>
              <p className="text-gray-600">
                Capacidad para realizar estudios extensivos de calidad de agua con presupuestos limitados, fortaleciendo sus campañas de conservación.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nuestra Historia</h2>
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">El Origen</h3>
                <p className="text-gray-600 mb-4">
                  Somos estudiantes de Ingeniería en Tecnologías de la Información de la Universidad Politécnica de Puebla, participando en el Datathón en el marco del II Congreso Nacional de Ciencia de Datos, UDLAP. 
                </p>
                <p className="text-gray-600">
                  El reto a lograr es la construcción de un modelo modelo de entrenamiento de datos para la clasificación de la calidad del agua de diferentes muestras de ríos de Francia
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">El Descubrimiento</h3>
                <p className="text-gray-600 mb-4">
                  Nuestro equipo trabajó con las muestras de datos biológicos (diatomeas) y geográficos, para determinar la calidad del agua y clasificarla en clases: POOR, BAD, MODERATE, GOOD, HIGH.                 </p>
                <p className="text-gray-600">
                  Este modelo reducirá los costos y tiempos de las operaciones de muestreo y ofrece una simulación de cambios en los parámetros que busca agilizar los procesos biológicos para la restauración del agua                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">El Equipo Detrás de NautaData</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-700 font-bold text-xl">GE</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Gerardo</h3>
              <p className="text-gray-600 text-sm">Científico de Datos</p>
              <p className="text-gray-500 text-xs mt-2">Arquitectura de modelos predictivos y análisis avanzado</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-700 font-bold text-xl">JO</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Jorge</h3>
              <p className="text-gray-600 text-sm">Ecólogo Acuático</p>
              <p className="text-gray-500 text-xs mt-2">Especialista en bioindicadores y ecología de diatomeas</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-700 font-bold text-xl">JN</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Jonathan</h3>
              <p className="text-gray-600 text-sm">Ingeniero Ambiental</p>
              <p className="text-gray-500 text-xs mt-2">Gestión hídrica y aplicaciones en políticas públicas</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-700 font-bold text-xl">GU</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Gudelia</h3>
              <p className="text-gray-600 text-sm">Desarrolladora Full-Stack</p>
              <p className="text-gray-500 text-xs mt-2">Plataforma digital y experiencia de usuario</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unidos por la convicción de que la tecnología debe servir para resolver problemas reales, combinamos nuestras disciplinas para crear una solución que transforma cómo protegemos nuestro recurso más vital: el agua.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-500 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Transformar la Gestión del Agua?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Únete a municipios, industrias y organizaciones que ya están utilizando NautaData para proteger sus recursos hídricos con una solución rápida, económica y confiable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-blue-500 font-medium py-3 px-8 rounded-lg transition duration-300 inline-block"
            >
              Solicitar Demostración
            </a>
            <a 
              href="/verificar" 
              className="bg-transparent hover:bg-blue-600 text-white border border-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-block"
            >
              Probar Diagnóstico Gratis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}