import './catalog-intro.css';

const BASE_URL = import.meta.env.BASE_URL;

export function createCatalogIntro() {
  return `
    <section
      class="np-catalog-intro"
      aria-labelledby="catalog-title"
    >
      <div class="np-container">
        <nav
          class="np-catalog-intro__breadcrumb"
          aria-label="Breadcrumb"
        >
          <a
            href="${BASE_URL}"
            class="np-catalog-intro__breadcrumb-link"
          >
            Inicio
          </a>

          <span aria-hidden="true">
            >
          </span>

          <span aria-current="page">
            Catálogo
          </span>
        </nav>

        <div class="np-catalog-intro__content">
          <span class="np-catalog-intro__eyebrow">
            Soluciones industriales
          </span>

          <h1
            class="np-catalog-intro__title"
            id="catalog-title"
          >
            Catálogo
          </h1>

          <p class="np-catalog-intro__description">
            Explora nuestras soluciones industriales
            organizadas por categorías para encontrar
            rápidamente el producto adecuado para cada
            necesidad.
          </p>
        </div>
      </div>
    </section>
  `;
}