# New Pig México — Rediseño de Home (Prototipo Visual)

## Descripción

Prototipo visual y funcional (sin backend real) del rediseño de la
página de inicio (Home) del sitio de New Pig México. Construido con
Vite Vanilla, HTML semántico, CSS moderno y JavaScript en ES Modules,
con una arquitectura de componentes pensada para facilitar una futura
migración a secciones de Shopify (Liquid).

## Objetivo

Servir como entregable de presentación al cliente para validar
dirección visual, estructura de contenido y experiencia responsive de
la nueva Home, **antes** de iniciar el desarrollo del tema real en
Shopify.

## Tecnologías

- Vite (modo Vanilla, sin frameworks de UI)
- HTML5 semántico
- CSS moderno (Grid, Flexbox, `clamp()`, `min()`, `max()`, `minmax()`,
  `auto-fit`, `auto-fill`, variables CSS)
- JavaScript ES Modules (sin frameworks: sin React, Vue ni Angular)
- Arquitectura modular por componente, preparada para migración a
  Shopify Liquid

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
```

## Previsualización del build

```bash
npm run preview
```

## Estructura del proyecto

new-pig-mexico-home-redesign/
├── public/
│ ├── images/
│ │ ├── placeholders/
│ │ ├── logos/
│ │ └── icons/
│ └── favicon.svg
│
├── src/
│ ├── components/
│ │ ├── header/
│ │ ├── hero/
│ │ ├── benefits/
│ │ ├── categories/
│ │ ├── brands/
│ │ ├── expert-search/
│ │ ├── company-story/
│ │ ├── testimonials/
│ │ └── footer/
│ │
│ ├── styles/
│ │ ├── reset.css
│ │ ├── variables.css
│ │ ├── typography.css
│ │ ├── utilities.css
│ │ └── global.css
│ │
│ ├── scripts/
│ │ ├── navigation.js
│ │ └── forms.js
│ │
│ ├── data/
│ │ ├── categories.js
│ │ ├── benefits.js
│ │ └── testimonials.js
│ │
│ └── main.js
│
├── shopify-reference/ (solo referencia, no ejecutable)
├── docs/
│ ├── content-requirements.md
│ └── migration-notes.md
│
├── index.html
├── package.json
└── README.md


## Orden de secciones de la Home

1. Header (topbar de contacto + navegación + buscador visual)
2. Hero principal (con panel lateral de 4 beneficios destacados)
3. Barra de beneficios (envíos, asesoría, marcas líderes, garantía)
4. Categorías de producto (9 tarjetas)
5. Marcas de confianza (placeholder)
6. Buscador de expertos ("Expertos en Control de Derrames y Seguridad Industrial")
7. Trayectoria de la empresa (con métricas)
8. Testimonios (provisionales)
9. Footer (recursos, legal, newsletter visual, redes sociales)

## Limitaciones (por diseño, en esta fase)

- **No** hay integración real con Shopify.
- **No** hay carrito de compras funcional.
- **No** hay autenticación de usuarios funcional.
- **No** hay búsqueda real (ni en el header ni en "Consultar experto").
- **No** hay conexión con productos ni colecciones reales.
- **No** se usa Liquid todavía.
- Los testimonios, logos de marcas y algunas imágenes son
  **placeholders provisionales** (ver `docs/content-requirements.md`).
- El formulario de newsletter y el buscador de expertos únicamente
  muestran un mensaje visual local; no envían datos a ningún servidor.

## Estado

Prototipo visual listo para revisión y feedback del cliente. Pendiente
de: contenido real (ver `docs/content-requirements.md`), y de acceso
al Admin/tema de Shopify para iniciar la migración (ver
`docs/migration-notes.md`).

## Migración futura a Shopify

Consulta `docs/migration-notes.md` para el detalle de cómo cada
componente se traduce a `sections/*.liquid`, qué contenido se
convierte en `section.settings`, qué se convierte en `section.blocks`,
qué debería venir de colecciones reales y qué podría beneficiarse de
metaobjects. La carpeta `shopify-reference/` queda preparada como
espacio de trabajo para esa fase (ver `shopify-reference/README.md`).