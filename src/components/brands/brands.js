import './brands.css';

/**
 * createBrands
 * Sección de confianza ("Confían en nosotros") con logos/nombres de
 * marca simulados. Ver nota en brandsData: son marcadores de posición.
 *
 * Migración futura: sections/np-brands.liquid — cada logo como
 * section.block tipo "brand_logo" con campo image; podría venir de
 * un metaobject "brand" si se requiere reutilizar en otras páginas.
 */

/**
 * NOTA: Nombres de marca PROVISIONALES. No son clientes reales de
 * New Pig México. Se deben reemplazar por logos reales y autorizados
 * antes de publicar en producción.
 */
const placeholderBrands = [
  'Industria Uno',
  'Grupo Delta',
  'Planta Norte',
  'Corporativo MX',
  'Manufactura Central'
];

export function createBrands() {
  return `
    <section class="np-brands" aria-labelledby="np-brands-title">
      <div class="np-container">
        <div class="np-brands__header">
          <h2 id="np-brands-title" class="np-brands__title">Confían en nosotros</h2>
          <p class="np-brands__subtitle">
            Empresas líderes que protegen sus operaciones con soluciones PIG&reg;.
          </p>
        </div>
        <ul class="np-brands__list">
          ${placeholderBrands.map(renderBrandLogo).join('')}
        </ul>
      </div>
    </section>
  `;
}

function renderBrandLogo(name) {
  return `
    <li class="np-brands__item" aria-label="Marca de cliente: ${name} (marcador de posición)">
      <span class="np-brands__logo-placeholder">${name}</span>
    </li>
  `;
}