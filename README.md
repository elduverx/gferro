# Grupo Ferrero - Landing Page de Reformas Integrales

Este proyecto es una landing page profesional diseñada para **Grupo Ferrero**, especializada en reformas integrales, cocinas y baños.

## 🚀 Características
- **Diseño Premium:** Estética Black & Gold orientada a la arquitectura y reformas de lujo.
- **Optimizado para Conversión:** Secciones estratégicas de Hero, Servicios, Portfolio y Contacto.
- **Rendimiento:** Desarrollado con Next.js 16 (App Router) y Tailwind CSS 4 para máxima velocidad y SEO.
- **Responsivo:** Adaptado perfectamente a dispositivos móviles y tablets.
- **SEO Local:** Estructura preparada para posicionamiento en el sector de la construcción.

## 🛠️ Tecnologías
- [Next.js](https://nextjs.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescript.org/)
- [Lucide Icons](https://lucide.dev/) (Iconografía personalizada en SVG)

## 📋 Requisitos para Producción

### 1. Datos de Contacto
Actualmente, la web utiliza placeholders para la información de contacto. Antes de desplegar, asegúrate de actualizar los siguientes archivos:
- `components/Contact.tsx`: Teléfono, Email y Ubicación.
- `components/Footer.tsx`: Enlaces a redes sociales y datos de copyright.

### 2. Imágenes
Las imágenes utilizadas son de Unsplash (referencias visuales). Se recomienda sustituirlas por fotos reales de los proyectos de Grupo Ferrero para aumentar la confianza del cliente:
- `components/Hero.tsx`
- `components/Portfolio.tsx`

## 🚀 Despliegue

La forma más sencilla de desplegar es usando [Vercel](https://vercel.com/new):

1. Sube el código a un repositorio (GitHub, GitLab, Bitbucket).
2. Importa el proyecto en Vercel.
3. El despliegue será automático.

O para generar una build local:

```bash
npm run build
npm run start
```

## 📄 Licencia
Este proyecto es privado y propiedad de Grupo Ferrero.
