# Kindergarten — Landing Page

Landing page para un kínder, construida con **Astro** + **Tailwind CSS v4**, basada en el
diseño de referencia `Bright Futures Start With Learning!`.

## Stack

- [Astro](https://astro.build) (salida estática)
- [Tailwind CSS v4](https://tailwindcss.com) vía `@tailwindcss/vite`
- Fuentes Google: Baloo 2 + Nunito

## Comandos

| Comando           | Acción                                            |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Instala dependencias                              |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`        |
| `npm run build`   | Genera el sitio en `./dist/`                      |
| `npm run preview` | Previsualiza el build localmente                  |

## Estructura

```
src/
  layouts/Layout.astro        # <head>, fuentes, estilos globales
  styles/global.css           # Tailwind + tema (colores de marca, animaciones)
  components/
    Logo.astro                # Logo del sol (variantes light/dark)
    SiteHeader.astro          # Barra superior + navegación con iconos
    Hero.astro                # "Nurturing Today, Inspiring Tomorrow" + arcoíris
    Features.astro            # 4 tarjetas: Play & Learn, Growing Together, ...
    WhyChooseUs.astro         # Franja crema con 4 razones
    Welcome.astro             # Bienvenida + Latest News
    GalleryCta.astro          # "Happy Children, Bright Futures!" + escena verde
    SiteFooter.astro          # Footer verde con enlaces y redes
  pages/index.astro           # Ensambla todas las secciones
```

Las imágenes se cargan desde Unsplash; sustitúyelas por fotos propias en `public/`
cuando estén disponibles.
