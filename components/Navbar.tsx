'use client';

import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 dark:bg-black/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" onClick={closeMenu} className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-primary dark:text-white">
              GRUPO <span className="text-accent">FERRERO</span>
            </span>
          </a>
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
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-primary hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMenu}
            className="fixed inset-0 top-20 bg-black/30 md:hidden"
          />
          <div id="mobile-menu" className="relative z-10 border-t border-zinc-100 bg-white px-4 py-5 shadow-xl dark:border-zinc-800 dark:bg-black md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              <a onClick={closeMenu} href="#servicios" className="rounded-xl px-4 py-3 text-base font-semibold hover:bg-zinc-100 hover:text-accent dark:hover:bg-zinc-900">
                Servicios
              </a>
              <a onClick={closeMenu} href="#proyectos" className="rounded-xl px-4 py-3 text-base font-semibold hover:bg-zinc-100 hover:text-accent dark:hover:bg-zinc-900">
                Proyectos
              </a>
              <a onClick={closeMenu} href="#contacto" className="rounded-xl px-4 py-3 text-base font-semibold hover:bg-zinc-100 hover:text-accent dark:hover:bg-zinc-900">
                Contacto
              </a>
              <a onClick={closeMenu} href="#contacto" className="mt-2 rounded-full bg-accent px-5 py-3 text-center font-bold text-white hover:opacity-90">
                Presupuesto Gratis
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
