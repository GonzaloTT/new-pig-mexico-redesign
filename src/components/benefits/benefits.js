import './benefits.css';
import { benefits } from '../../data/benefits.js';

/**
 * createBenefits
 * Barra de 4 beneficios rápidos ubicada debajo del hero.
 *
 * Migración futura: sections/np-benefits.liquid — cada item de
 * src/data/benefits.js se convierte en un section.block tipo "benefit_item"
 * con campos: icon (picker o svg), title (text), description (text).
 */
export function createBenefits() {
  return `
    <section class="np-benefits" aria-label="Beneficios de comprar con New Pig México">
      <div class="np-container np-benefits__grid">
        ${benefits.map(renderBenefitItem).join('')}
      </div>
    </section>
  `;
}

function renderBenefitItem(benefit) {
  return `
    <div class="np-benefits__item">
      <span class="np-benefits__icon" aria-hidden="true">${getBenefitIcon(benefit.icon)}</span>
      <div class="np-benefits__text">
        <p class="np-benefits__title">${benefit.title}</p>
        <p class="np-benefits__description">${benefit.description}</p>
      </div>
    </div>
  `;
}

function getBenefitIcon(name) {
  const icons = {
    truck: `<svg width="55" height="55" viewBox="0 0 24 24" fill="none"><path d="M3 7h11v9H3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 10h4l3 3v3h-7v-6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="7" cy="18" r="1.6" stroke="currentColor" stroke-width="1.4"/><circle cx="17.5" cy="18" r="1.6" stroke="currentColor" stroke-width="1.4"/></svg>`,
    'user-check': `<svg width="55" height="55" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="8" r="3.5" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 20c1.2-3.4 3.8-5.2 6.5-5.2s5.3 1.8 6.5 5.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M16.5 10l2 2 3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    award: `<svg width="55" height="55" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8.5" r="5.5" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    'shield-check': `<svg width="55" height="55" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8.5 12.3l2.3 2.3 4.7-4.9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  };
  return icons[name] || '';
}
