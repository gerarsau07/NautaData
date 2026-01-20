import Link from "next/link";
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return(
        <footer className="bg-cyan-50 border-t border-gray-200 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-bold text-gray-800">NautaData</h2>
                        <p className="text-gray-600 text-xs mt-1">Plataforma de Diagnóstico y Simulación<br/>para la Gestión Hídrica Sostenible</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-gray-800 font-medium mb-2 text-sm">Navegación</h3>
                            <div className="flex flex-col space-y-1">
                                <Link href="/" className="text-gray-600 hover:text-blue-500 text-xs transition duration-300">
                                    Inicio
                                </Link>
                                <Link href="/about" className="text-gray-600 hover:text-blue-500 text-xs transition duration-300">
                                    Acerca de
                                </Link>
                                <Link href="/contact" className="text-gray-600 hover:text-blue-500 text-xs transition duration-300">
                                    Contacto
                                </Link>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-gray-800 font-medium mb-2 text-sm">Servicios</h3>
                            <div className="flex flex-col space-y-1">
                                <Link href="/verificar" className="text-gray-600 hover:text-blue-500 text-xs transition duration-300">
                                    Diagnóstico de Calidad
                                </Link>
                                <Link href="/simulacion" className="text-gray-600 hover:text-blue-500 text-xs transition duration-300">
                                    Simulación de Escenarios
                                </Link>
                                <Link href="/login" className="text-gray-600 hover:text-blue-500 text-xs transition duration-300">
                                    Acceso Clientes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 text-xs">&copy; {currentYear} NautaData. Todos los derechos reservados.</p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <span className="text-gray-500 text-xs">Creado por: Gerardo, Jorge, Jonathan, Gudelia</span>
                    </div>
                </div>
            </div>
        </footer>
    );  
}