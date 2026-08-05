import './categories.css';
import { categories } from '../../data/categories.js';

/**
 * createCategories
 * Sección "Encuentra la solución que necesitas": título, texto
 * secundario, enlace de catálogo completo y grid de 9 tarjetas.
 *
 * Migración futura: sections/np-categories.liquid — title/subtitle como
 * section.settings; cada tarjeta podría venir de una colección real
 * (collection.title, collection.image, collection.url) en lugar de
 * src/data/categories.js.
 */
export function createCategories() {
  return `
    <section class="np-categories np-section" aria-labelledby="np-categories-title">
      <div class="np-container">
        <div class="np-categories__header">
          <div>
            <h2 id="np-categories-title" class="np-categories__title">
              Encuentra la solución que necesitas
            </h2>
            <p class="np-categories__subtitle">
              Explora nuestras categorías principales
            </p>
          </div>
          <a href="#" class="np-categories__link">
            Ver catálogo completo
            ${iconArrowRight()}
          </a>
        </div>

        <div class="np-categories__grid">
          ${categories.map(renderCategoryCard).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderCategoryCard(category) {
  return `
    <a href="${category.href}" class="np-category-card" aria-label="Ver categoría ${category.title}">
      <span class="np-category-card__visual" aria-hidden="true">
        ${getCategoryIcon(category.icon)}
      </span>
      <span class="np-category-card__title">${category.title}</span>
    </a>
  `;
}

function getCategoryIcon(name) {
  const icons = {
    mat: `<svg viewBox="0 0 64 64" width="48" height="48"><rect x="10" y="8" width="44" height="48" rx="4" fill="var(--np-color-gray-medium)"/><rect x="16" y="14" width="32" height="6" rx="2" fill="var(--np-color-white)"/><rect x="16" y="24" width="32" height="6" rx="2" fill="var(--np-color-white)"/><rect x="16" y="34" width="32" height="6" rx="2" fill="var(--np-color-white)"/><rect x="16" y="44" width="20" height="6" rx="2" fill="var(--np-color-white)"/></svg>`,
    rags: `<svg viewBox="0 0 64 64" width="48" height="48"><circle cx="32" cy="30" r="20" fill="var(--np-color-gray-medium)"/><path d="M20 26c4-6 20-6 24 0" stroke="var(--np-color-white)" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M20 34c4 6 20 6 24 0" stroke="var(--np-color-white)" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    'floor-sign': `<svg viewBox="0 0 64 64" width="48" height="48"><path d="M8 50h48l-24-32z" fill="var(--np-color-accent)"/><rect x="26" y="30" width="12" height="14" fill="var(--np-color-primary-dark)"/></svg>`,
    sheets: `<svg viewBox="0 0 64 64" width="48" height="48"><rect x="12" y="10" width="34" height="44" rx="3" fill="var(--np-color-gray-medium)"/><rect x="18" y="18" width="34" height="44" rx="3" fill="var(--np-color-white)" stroke="var(--np-color-gray-medium)" stroke-width="2"/></svg>`,
    kit: `<svg viewBox="0 0 64 64" width="48" height="48"><rect x="10" y="22" width="44" height="30" rx="4" fill="var(--np-color-accent)"/><rect x="24" y="14" width="16" height="10" rx="2" fill="var(--np-color-accent-dark)"/><rect x="10" y="34" width="44" height="6" fill="var(--np-color-primary-dark)"/></svg>`,
    drain: `<svg viewBox="0 0 64 64" width="48" height="48"><rect x="8" y="8" width="48" height="48" rx="6" fill="var(--np-color-gray-medium)"/><circle cx="32" cy="32" r="4" fill="var(--np-color-white)"/><circle cx="20" cy="20" r="3" fill="var(--np-color-white)"/><circle cx="44" cy="20" r="3" fill="var(--np-color-white)"/><circle cx="20" cy="44" r="3" fill="var(--np-color-white)"/><circle cx="44" cy="44" r="3" fill="var(--np-color-white)"/></svg>`,
    helmet: `<svg viewBox="0 0 64 64" width="48" height="48"><path d="M12 40a20 20 0 0 1 40 0z" fill="var(--np-color-accent)"/><rect x="8" y="40" width="48" height="8" rx="3" fill="var(--np-color-accent-dark)"/></svg>`,
    cabinet: `<svg viewBox="0 0 64 64" width="48" height="48"><rect x="14" y="8" width="36" height="48" rx="3" fill="var(--np-color-gray-medium)"/><rect x="19" y="14" width="26" height="16" fill="var(--np-color-white)"/><rect x="19" y="34" width="26" height="16" fill="var(--np-color-white)"/><circle cx="41" cy="22" r="1.6" fill="var(--np-color-gray-medium)"/><circle cx="41" cy="42" r="1.6" fill="var(--np-color-gray-medium)"/></svg>`,
    drum: `<svg viewBox="0 0 64 64" width="48" height="48"><rect x="16" y="10" width="32" height="44" rx="4" fill="var(--np-color-primary-dark)"/><rect x="16" y="22" width="32" height="6" fill="var(--np-color-accent)"/><rect x="16" y="34" width="32" height="6" fill="var(--np-color-accent)"/></svg>`
  };
  return icons[name] || icons.sheets;
}

function iconArrowRight() {
  return `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}