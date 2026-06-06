import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "Cocina Moderna Minimalista",
    category: "Cocinas",
    image: "/cocina.png"
  },
  {
    title: "Reforma Integral Loft",
    category: "Interiores",
    image: "/salon.png"
  },
  {
    title: "Baño de Lujo Spa",
    category: "Baños",
    image: "/bano.png"
  },
  {
    title: "Salón de Concepto Abierto",
    category: "Interiores",
    image: "/salonn.png"
  },
  {
    title: "Cocina de Diseño Premium",
    category: "Cocinas",
    image: "/cocina.png"
  },
  {
    title: "Baño Moderno Elegante",
    category: "Baños",
    image: "/banoo.png"
  }
];

const Portfolio = () => {
  return (
    <section id="proyectos" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Nuestro Trabajo</h2>
            <p className="text-4xl md:text-5xl font-bold dark:text-white">Proyectos Destacados</p>
          </div>
          <a href="#" className="text-accent font-bold hover:underline">Ver todos los proyectos →</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-200">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-accent text-sm font-bold uppercase tracking-wider mb-2">{project.category}</p>
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
