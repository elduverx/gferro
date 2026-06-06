'use client';

import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Reformas Integrales',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleServiceSelected = (event: Event) => {
      const service = (event as CustomEvent<string>).detail;
      setFormData((current) => ({ ...current, type: service }));
      setStatus('idle');
    };

    window.addEventListener('service-selected', handleServiceSelected);
    return () => window.removeEventListener('service-selected', handleServiceSelected);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', type: 'Reformas Integrales', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Contacto</h2>
            <p className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">¿Hablamos de tu próximo proyecto?</p>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              Estamos listos para hacer realidad tus ideas. Solicita tu presupuesto personalizado sin compromiso y descubre por qué somos líderes en reformas integrales.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-bold uppercase">Llámanos</p>
                  <a href="tel:+34611810588" className="text-lg font-bold dark:text-white hover:text-accent transition-colors">
                    611 810 588
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-bold uppercase">Email</p>
                  <p className="text-lg font-bold dark:text-white">info@grupoferrero.es</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-bold uppercase">Ubicación</p>
                  <p className="text-lg font-bold dark:text-white">Toda la Comunidad Valenciana</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">¡Mensaje enviado!</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Gracias por contactar con Grupo Ferrero. Nos pondremos en contacto contigo muy pronto.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-accent font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 dark:text-white uppercase tracking-wider">Nombre</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Tu nombre" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 dark:text-white uppercase tracking-wider">Teléfono</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="Tu teléfono" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 dark:text-white uppercase tracking-wider">Tipo de Reforma</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option>Reformas Integrales</option>
                    <option>Cocinas de Diseño</option>
                    <option>Reforma de Baños</option>
                    <option>Servicios Técnicos</option>
                    <option>Rehabilitación</option>
                    <option>Interiorismo y Acabados</option>
                    <option>Otro proyecto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 dark:text-white uppercase tracking-wider">Mensaje</label>
                  <textarea 
                    required
                    rows={4} 
                    placeholder="Cuéntanos un poco sobre tu proyecto..." 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  ></textarea>
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-bold text-center">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
                )}
                <button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className={`w-full bg-accent text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity text-lg flex items-center justify-center gap-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : 'Enviar Solicitud'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
