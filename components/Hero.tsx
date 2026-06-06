import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/salon.png"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Reformas Integrales: Transformamos tu espacio en un <span className="text-accent">hogar de diseño</span>.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-zinc-200">
            Calidad artesanal, diseño moderno y gestión integral. Tu proyecto llave en mano con la garantía de Grupo Ferrero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="inline-block bg-accent text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform text-center"
            >
              Pide tu Presupuesto Gratis
            </a>
            <a 
              href="#servicios" 
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all text-center"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
