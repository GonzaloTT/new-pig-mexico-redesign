import './catalog-banner.css';

export function createCatalogBanner(
  category
) {
  return `
    <section
      class="np-catalog-banner"
      aria-labelledby="catalog-category-title"
    >
      <div
        class="np-catalog-banner__visual"
        aria-hidden="true"
      >
        <div
          class="np-catalog-banner__placeholder"
        >
          <span
            class="np-catalog-banner__placeholder-label"
          >
            Imagen pendiente
          </span>

          ${createBannerPlaceholder()}
        </div>
      </div>

      <div
        class="np-catalog-banner__overlay"
        aria-hidden="true"
      ></div>

      <div
        class="np-catalog-banner__content"
      >
        <span
          class="np-catalog-banner__eyebrow"
        >
          Categoría de producto
        </span>

        <h2
          class="np-catalog-banner__title"
          id="catalog-category-title"
        >
          ${category.title}
        </h2>

        <p
          class="np-catalog-banner__description"
        >
          ${category.description}
        </p>
      </div>
    </section>
  `;
}

function createBannerPlaceholder() {
  return `
    <div
      class="np-catalog-banner__placeholder-art"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
}