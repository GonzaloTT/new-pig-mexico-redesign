# Notas de migración a Shopify (Liquid)

Este documento describe cómo cada componente del prototipo se traduciría
conceptualmente a una arquitectura de tema Shopify (OS 2.0), una vez que
exista acceso al Admin y al tema real del cliente.

## Tabla de migración

| Prototipo | Shopify |
|---|---|
| `components/header` | Header existente del tema o section group |
| `components/hero` | `sections/np-hero.liquid` |
| `components/benefits` | `sections/np-benefits.liquid` |
| `components/categories` | `sections/np-categories.liquid` |
| `components/brands` | `sections/np-brands.liquid` |
| `components/expert-search` | `sections/np-expert-search.liquid` |
| `components/company-story` | `sections/np-company-story.liquid` |
| `components/testimonials` | `sections/np-testimonials.liquid` |
| `components/footer` | Footer existente del tema |

## ¿Qué será `section.settings`?

Campos únicos de configuración por sección, editables desde el
Theme Editor. Ejemplos:
- Hero: eyebrow, título, texto destacado en amarillo, descripción, textos y enlaces de los dos botones, imagen de fondo/composición.
- Expert search: título, descripción, textos y enlaces de los dos botones, placeholder del input.
- Company story: eyebrow, título, descripción, imagen del equipo, texto de la etiqueta amarilla.

## ¿Qué será `section.blocks`?

Elementos repetibles que el merchant puede añadir, quitar o reordenar
desde el Theme Editor. Ejemplos:
- Benefits: cada uno de los 4 beneficios (icon, title, description) como block tipo `benefit_item`.
- Categories: si no vienen de colecciones reales, cada tarjeta como block tipo `category_card` (image, title, url).
- Brands: cada logo como block tipo `brand_logo` (image, alt).
- Expert search: cada chip como block tipo `search_chip` (label).
- Company story: cada métrica (+35 años, 10,000+) como block tipo `metric` (value, label).
- Testimonials: cada testimonio como block tipo `testimonial` (quote, author, role, rating).

## ¿Qué vendrá de colecciones?

- Lo ideal es que `components/categories` deje de usar `src/data/categories.js`
  y en su lugar itere sobre una lista de colecciones reales de Shopify
  (`collection.title`, `collection.featured_image`, `collection.url`),
  ya sea mediante una lista manual de handles en `section.settings` o
  mediante un menú de navegación (`linklist`) configurado como "Categorías".
- El buscador de `expert-search` podría eventualmente conectarse al
  Predictive Search API real de Shopify (`/search/suggest.json`) en
  lugar del comportamiento simulado actual.

## ¿Qué podría usar metaobjects?

- **Testimonios**: cada testimonio como un metaobject `testimonial` con
  campos `quote`, `author`, `role`, `rating`, reutilizable en otras
  páginas (no solo la Home).
- **Marcas de confianza (brands)**: cada logo como metaobject `brand_logo`
  con campo `image` y `url`, para reutilizar en página "Acerca de
  Nosotros" o en el footer.
- **Beneficios (benefits)**: si se reutilizan en más de una plantilla
  (ej. Home y página de categoría), convendría un metaobject `benefit`
  en lugar de blocks locales a la sección.

## ¿Qué depende del tema real?

- Estructura exacta del header/footer actuales del tema instalado
  (pueden ya existir como secciones nativas, o requerir theme app
  extensions si se usan apps de terceros para el buscador o el chat
  de WhatsApp).
- Disponibilidad de OS 2.0 (section groups, app blocks) según la
  versión del tema base que el cliente tenga instalada.
- Sistema de diseño existente del tema (si ya tiene sus propias
  variables CSS, sería necesario armonizar `variables.css` con los
  settings globales del tema en `config/settings_schema.json`).
- Integraciones reales de carrito, cuenta de cliente y checkout, que
  en este prototipo están deliberadamente deshabilitadas.