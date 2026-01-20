import "./globals.css";
import Link from "next/link";
import Footer from "./components/footer";

export const metadata = {
  title: "Modelo de IBD",
  description: "Creacion de una floreria con next.js y Tailwind CSS version 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body className="antialiased bg-gray-50 min-h-screen flex flex-col">
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0">
                <Link href="/">
                  <img
                    src="/logoFv2.jpeg"
                    alt="Logo"
                    width={180}
                    height={80}
                    className="rounded-full"
                  />
                </Link>
              </div>
              <ul className="flex space-x-6">
                <li>
                  <Link 
                    href="/" 
                    className="text-gray-700 hover:text-sky-500 font-medium transition-all duration-300 ease-in-out py-2 px-4 rounded-full hover:bg-sky-50"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-700 hover:text-sky-500 font-medium transition-all duration-300 ease-in-out py-2 px-4 rounded-full hover:bg-sky-50"
                  >
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-700 hover:text-sky-500 font-medium transition-all duration-300 ease-in-out py-2 px-4 rounded-full hover:bg-sky-50"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/verificar" 
                    className="text-gray-700 hover:text-sky-500 font-medium transition-all duration-300 ease-in-out py-2 px-4 rounded-full hover:bg-sky-50"
                  >
                    Monitoreo
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/login" 
                    className="bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:from-sky-600 hover:to-blue-600 font-medium transition-all duration-300 ease-in-out py-2 px-6 rounded-full shadow-sm hover:shadow"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html> 
  );
}