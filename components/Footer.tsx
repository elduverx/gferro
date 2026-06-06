import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <span className="text-3xl font-bold tracking-tighter mb-6 block">
              GRUPO <span className="text-accent">FERRERO</span>
            </span>
            <p className="text-zinc-400 max-w-md leading-relaxed">
              Especialistas en reformas integrales de alta calidad. Transformamos espacios con pasión, diseño y profesionalidad.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#servicios" className="hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#proyectos" className="hover:text-accent transition-colors">Proyectos</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Siguenos</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/grupoferrero_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Grupo Ferrero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
