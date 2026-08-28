import './catalog-sidebar.css';

const BASE_URL = import.meta.env.BASE_URL;

export function createCatalogSidebar(
  categories,
  activeSlug
) {
  return `
    <aside
      class="np-catalog-sidebar"
      aria-label="Categorías del catálogo"
    >
      <p class="np-catalog-sidebar__eyebrow">
        Categorías
      </p>

      <nav
        class="np-catalog-sidebar__nav"
        aria-label="Clasificaciones de productos"
      >
        <ul class="np-catalog-sidebar__list">
          ${categories
            .map((category) => {
              const isActive =
                category.slug === activeSlug;

              return `
                <li
                  class="np-catalog-sidebar__item"
                >
                  <a
                    href="${BASE_URL}catalogo/?categoria=${category.slug}"
                    class="
                      np-catalog-sidebar__link
                      ${
                        isActive
                          ? 'np-catalog-sidebar__link--active'
                          : ''
                      }
                    "
                    ${
                      isActive
                        ? 'aria-current="page"'
                        : ''
                    }
                  >
                    <span
                      class="np-catalog-sidebar__indicator"
                      aria-hidden="true"
                    ></span>

                    <span
                      class="np-catalog-sidebar__label"
                    >
                      ${category.title}
                    </span>

                    <span
                      class="np-catalog-sidebar__icon"
                      aria-hidden="true"
                    >
                      ${iconChevron()}
                    </span>
                  </a>
                </li>
              `;
            })
            .join('')}
        </ul>
      </nav>
    </aside>
  `;
}

function iconChevron() {
  return `
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
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