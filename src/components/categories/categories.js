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
    <a
      href="${category.href}"
      class="np-category-card"
      aria-label="Ver categoría ${category.title}"
    >
      <span class="np-category-card__visual">
        <img
          src="${category.image}"
          alt=""
          class="np-category-card__image"
          loading="lazy"
        />
      </span>

      <span class="np-category-card__title">
        ${category.title}
      </span>
    </a>
  `;
}

function iconArrowRight() {
  return `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}