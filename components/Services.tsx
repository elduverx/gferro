'use client';

import React from 'react';

const services = [
  {
    title: "Reformas Integrales",
    description: "Transformamos viviendas, locales y oficinas coordinando todo el proyecto de principio a fin.",
    features: ["Distribución y diseño del espacio", "Demoliciones e instalaciones", "Coordinación de gremios y acabados"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Cocinas de Diseño",
    description: "Diseñamos cocinas funcionales y duraderas, adaptadas a tu espacio y a tu forma de vivir.",
    features: ["Mobiliario y encimeras a medida", "Fontanería, electricidad e iluminación", "Revestimientos y montaje final"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.673.337a4 4 0 01-2.586.346l-2.387-.477a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 000 2.828l.586.586a2 2 0 002.828 0l2.387-2.387a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.337-.673a4 4 0 01-.346-2.586l.477-2.387a2 2 0 00-.547-1.022l-2.387-2.387a2 2 0 00-2.828 0l-.586.586a2 2 0 000 2.828l2.387 2.387z" />
      </svg>
    )
  },
  {
    title: "Reforma de Baños",
    description: "Renovamos por completo tu baño para mejorar su comodidad, estética y aprovechamiento.",
    features: ["Cambio de bañera por ducha", "Sanitarios, grifería y mobiliario", "Alicatado, fontanería y mamparas"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
      </svg>
    )
  },
  {
    title: "Servicios Técnicos",
    description: "Actualizamos las instalaciones para conseguir espacios más seguros, eficientes y confortables.",
    features: ["Electricidad y fontanería", "Climatización y calefacción", "Iluminación y eficiencia energética"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Rehabilitación",
    description: "Recuperamos y protegemos edificios, fachadas y espacios deteriorados con soluciones duraderas.",
    features: ["Fachadas e impermeabilización", "Cubiertas, terrazas y aislamiento", "Reparación de humedades y grietas"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 21V10l8-7 8 7v11M9 21v-6h6v6M7 10h10" />
      </svg>
    )
  },
  {
    title: "Interiorismo y Acabados",
    description: "Damos personalidad a cada estancia con materiales, colores y acabados elegidos con criterio.",
    features: ["Pintura y revestimientos", "Carpintería, puertas y suelos", "Iluminación y detalles decorativos"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m9-9H3m15.364-6.364L5.636 18.364m12.728 0L5.636 5.636" />
      </svg>
    )
  }
];

const Services = () => {
  const selectService = (service: string) => {
    window.dispatchEvent(new CustomEvent('service-selected', { detail: service }));
  };

  return (
    <section id="servicios" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Qué Hacemos</h2>
          <p className="text-4xl md:text-5xl font-bold text-primary dark:text-white">Nuestros Servicios</p>
          <p className="max-w-3xl mx-auto mt-5 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Nos ocupamos de cada fase de la obra: asesoramiento, planificación, ejecución y entrega. Un único equipo para que disfrutes del resultado sin preocuparte por la gestión.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index} 
              href="#contacto"
              onClick={() => selectService(service.title)}
              className="flex flex-col p-8 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:shadow-xl hover:border-accent/30 hover:-translate-y-1 transition-all group cursor-pointer"
              aria-label={`Solicitar presupuesto para ${service.title}`}
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="mt-7 inline-flex items-center gap-2 font-bold text-accent">
                Pedir presupuesto
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-zinc-950 px-8 py-7 text-white">
          <div>
            <h3 className="text-2xl font-bold">¿Tienes un proyecto diferente?</h3>
            <p className="mt-2 text-zinc-300">Cuéntanos qué necesitas y prepararemos una propuesta a medida.</p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 rounded-full bg-accent px-7 py-3 font-bold text-white transition-transform hover:scale-105"
          >
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
