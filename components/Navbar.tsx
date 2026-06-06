import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 dark:bg-black/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-primary dark:text-white">
              GRUPO <span className="text-accent">FERRERO</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#servicios" className="text-sm font-medium hover:text-accent transition-colors">Servicios</a>
            <a href="#proyectos" className="text-sm font-medium hover:text-accent transition-colors">Proyectos</a>
            <a href="#contacto" className="text-sm font-medium hover:text-accent transition-colors">Contacto</a>
            <a 
              href="#contacto" 
              className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Presupuesto Gratis
            </a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <button className="text-primary dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
