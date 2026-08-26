import './blog-hero.css';

/**
 * createBlogHero
 *
 * Hero principal de la página Blog.
 *
 * Incluye:
 * - breadcrumb
 * - título principal
 * - descripción
 * - imagen de fondo pendiente
 *
 * Cuando llegue la imagen real, solo será necesario sustituir
 * el placeholder visual por el asset definitivo.
 */
export function createBlogHero() {
  return `
    <section
      class="np-blog-hero"
      aria-labelledby="np-blog-hero-title"
    >
      <div class="np-blog-hero__background" aria-hidden="true">
        <div class="np-blog-hero__placeholder">
          <span
            class="np-blog-hero__placeholder-icon"
            aria-hidden="true"
          >
            ${iconImage()}
          </span>

          <span class="np-blog-hero__placeholder-text">
            Imagen pendiente
          </span>
        </div>
      </div>

      <div class="np-blog-hero__overlay" aria-hidden="true"></div>

      <div class="np-container np-blog-hero__container">
        <div class="np-blog-hero__content">

          <nav
            class="np-blog-hero__breadcrumb"
            aria-label="Breadcrumb"
          >
            <a
              href="${import.meta.env.BASE_URL}"
              class="np-blog-hero__breadcrumb-link"
            >
              Inicio
            </a>

            <span
              class="np-blog-hero__breadcrumb-separator"
              aria-hidden="true"
            >
              ›
            </span>

            <span
              class="np-blog-hero__breadcrumb-current"
              aria-current="page"
            >
              Blog
            </span>
          </nav>

          <h1
            id="np-blog-hero-title"
            class="np-blog-hero__title"
          >
            Blog de Seguridad e Higiene Industrial
          </h1>

          <p class="np-blog-hero__description">
            Descubre artículos, guías y recomendaciones de expertos sobre
            control de derrames, seguridad industrial, cumplimiento ambiental
            y mejores prácticas para mantener operaciones más seguras y
            eficientes.
          </p>

        </div>
      </div>
    </section>
  `;
}

function iconImage() {
  return `
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="10"
        width="48"
        height="44"
        rx="5"
        stroke="currentColor"
        stroke-width="2"
      />

      <circle
        cx="23"
        cy="25"
        r="5"
        stroke="currentColor"
        stroke-width="2"
      />

      <path
        d="M13 47l13-13 9 9 7-7 9 11"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}