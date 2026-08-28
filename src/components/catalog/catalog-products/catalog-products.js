import './catalog-products.css';

const PRODUCTS_PER_PAGE = 20;

export function createCatalogProducts(category) {
  const products = category.products.slice(
    0,
    PRODUCTS_PER_PAGE
  );

  return `
    <section
      class="np-catalog-products"
      aria-labelledby="catalog-products-title"
    >
      <header
        class="np-catalog-products__header"
      >
        <h2
          id="catalog-products-title"
          class="np-catalog-products__title"
        >
          Productos destacados
        </h2>

        <span
          class="np-catalog-products__count"
        >
          Mostrando
          ${products.length}
          productos
        </span>
      </header>

      <div
        class="np-catalog-products__grid"
      >
        ${products
          .map(
            (product) =>
              createProductCard(
                product,
                category
              )
          )
          .join('')}
      </div>

      ${createCatalogPagination()}
    </section>
  `;
}

function createProductCard(
  product,
  category
) {
  return `
    <article
      class="np-product-card"
    >
      ${createProductPlaceholder(
        product.placeholderType
      )}

      <div
        class="np-product-card__body"
      >
        <span
          class="np-product-card__category"
        >
          ${category.title}
        </span>

        <h3
          class="np-product-card__title"
        >
          ${product.name}
        </h3>

        <p
          class="np-product-card__description"
        >
          ${product.description}
        </p>

        <div
          class="np-product-card__actions"
        >
          <button
            type="button"
            class="
              np-product-card__button
              np-product-card__button--details
            "
          >
            Ver detalles
          </button>

          <button
            type="button"
            class="
              np-product-card__button
              np-product-card__button--quote
            "
            data-product-id="${product.id}"
          >
            ${iconCartPlus()}

            <span>
              Agregar al cotizador
            </span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function createCatalogPagination() {
  return `
    <nav
      class="np-catalog-pagination"
      aria-label="Paginación del catálogo"
    >
      <button
        type="button"
        class="
          np-catalog-pagination__button
          np-catalog-pagination__button--arrow
        "
        aria-label="Página anterior"
        disabled
      >
        ${iconChevronLeft()}
      </button>

      <button
        type="button"
        class="
          np-catalog-pagination__button
          np-catalog-pagination__button--active
        "
        aria-current="page"
      >
        1
      </button>

      <button
        type="button"
        class="np-catalog-pagination__button"
      >
        2
      </button>

      <button
        type="button"
        class="np-catalog-pagination__button"
      >
        3
      </button>

      <span
        class="np-catalog-pagination__ellipsis"
        aria-hidden="true"
      >
        …
      </span>

      <button
        type="button"
        class="np-catalog-pagination__button"
      >
        13
      </button>

      <button
        type="button"
        class="
          np-catalog-pagination__button
          np-catalog-pagination__button--arrow
        "
        aria-label="Página siguiente"
      >
        ${iconChevronRight()}
      </button>
    </nav>
  `;
}

function createProductPlaceholder(type) {
  return `
    <div
      class="
        np-product-placeholder
        np-product-placeholder--${type}
      "
      aria-label="Imagen de producto pendiente"
    >
      <span
        class="np-product-placeholder__badge"
      >
        Imagen pendiente
      </span>

      <div
        class="np-product-placeholder__visual"
        aria-hidden="true"
      >
        ${getPlaceholderIcon(type)}
      </div>
    </div>
  `;
}

function getPlaceholderIcon(type) {
  const icons = {
    mat: `
      <div
        class="
          np-placeholder-shape
          np-placeholder-shape--mat
        "
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    `,

    wiper: `
      <div
        class="
          np-placeholder-shape
          np-placeholder-shape--wiper
        "
      >
        <span></span>
        <span></span>
      </div>
    `,

    floor: `
      <div
        class="
          np-placeholder-shape
          np-placeholder-shape--floor
        "
      >
        <span></span>
      </div>
    `,

    absorbent: `
      <div
        class="
          np-placeholder-shape
          np-placeholder-shape--absorbent
        "
      >
        <span></span>
      </div>
    `,

    kit: `
      <div
        class="
          np-placeholder-shape
          np-placeholder-shape--kit
        "
      >
        <span>PIG</span>
      </div>
    `,

    drain: `
      <div
        class="
          np-placeholder-shape
          np-placeholder-shape--drain
        "
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    `,

    safety: `
      <div
        class="
          np-placeholder-shape
          np-placeholder-shape--safety
        "
      >
        <span>!</span>
      </div>
    `,

    storage: `
      <div
        class="
          np-placeholder-shape
          np-placeholder-shape--storage
        "
      >
        <span></span>
      </div>
    `,

    containment: `
      <div
        class="
          np-placeholder-shape
          np-placeholder-shape--containment
        "
      >
        <span></span>
      </div>
    `
  };

  return (
    icons[type] ||
    icons.absorbent
  );
}

function iconCartPlus() {
  return `
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4h2l2.2 10.3a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        d="M12 7v5M9.5 9.5h5"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
      />

      <circle
        cx="10"
        cy="20"
        r="1.2"
        fill="currentColor"
      />

      <circle
        cx="17"
        cy="20"
        r="1.2"
        fill="currentColor"
      />
    </svg>
  `;
}

function iconChevronLeft() {
  return `
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

function iconChevronRight() {
  return `
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}