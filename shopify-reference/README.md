# shopify-reference

Esta carpeta es **únicamente una referencia** para la futura migración
del prototipo a un tema de Shopify. **No forma parte del prototipo
ejecutable** (Vite Vanilla) y no se importa ni se construye junto con
el proyecto actual.

## Propósito

Servir como espacio de trabajo para, en una fase posterior del
proyecto (cuando exista acceso al Admin de Shopify y al tema real del
cliente), documentar o esbozar:

- `sections/` — Borradores o notas de las secciones Liquid
  equivalentes a cada componente del prototipo (`np-hero.liquid`,
  `np-benefits.liquid`, `np-categories.liquid`, `np-brands.liquid`,
  `np-expert-search.liquid`, `np-company-story.liquid`,
  `np-testimonials.liquid`).
- `snippets/` — Fragmentos reutilizables (por ejemplo, la tarjeta de
  categoría o la tarjeta de testimonio) que podrían compartirse entre
  varias secciones.
- `templates/` — Notas sobre cómo se ensamblarían las secciones dentro
  de `templates/index.json` (o `index.liquid` en temas Vintage).

## Estado actual

Estas subcarpetas están vacías intencionalmente en esta entrega. Ver
`docs/migration-notes.md` para el detalle conceptual de la migración
(qué será `section.settings`, `section.blocks`, qué vendrá de
colecciones, qué podría usar metaobjects y qué depende del tema real).

## Importante

No se debe copiar código de esta carpeta directamente a un tema de
producción sin antes:
1. Confirmar la versión del tema (Vintage vs. OS 2.0).
2. Revisar el sistema de diseño y tokens ya existentes en el tema real.
3. Validar accesibilidad y rendimiento dentro del entorno real de Shopify.