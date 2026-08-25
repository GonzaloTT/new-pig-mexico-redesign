import './pig-algorithm-hero.css';

/**
 * createPigAlgorithmHero
 *
 * Hero principal de la página Algoritmo PIG.
 *
 * Desktop:
 * - contenido a la izquierda
 * - imagen / composición visual a la derecha
 *
 * Mobile:
 * - contenido apilado
 * - imagen debajo
 *
 * La imagen queda temporalmente como placeholder hasta recibir
 * el asset definitivo del cliente.
 */
export function createPigAlgorithmHero() {
  return `
    <section
      class="np-pig-hero np-section"
      aria-labelledby="np-pig-hero-title"
    >
      <div class="np-container np-pig-hero__container">

        <div class="np-pig-hero__content">
          <p class="np-pig-hero__eyebrow">
            Servicio de consultoría industrial
          </p>

          <h1
            id="np-pig-hero-title"
            class="np-pig-hero__title"
          >
            Algoritmo PIG
          </h1>

          <p class="np-pig-hero__description">
            Descubre cómo mejorar la seguridad de tu operación con un
            diagnóstico especializado que identifica riesgos, oportunidades
            de mejora y las soluciones más adecuadas para tu empresa.
          </p>

          <div class="np-pig-hero__actions">
            <a
              href="#pig-algorithm-process"
              class="np-button np-button--accent np-pig-hero__primary-cta"
            >
              Solicitar evaluación gratuita
            </a>

            <a
              href="#pig-algorithm-process"
              class="np-button np-button--outline-dark"
            >
              Conocer cómo funciona
            </a>
          </div>
        </div>

        <div class="np-pig-hero__media">
          <div
            class="np-pig-hero__media-placeholder"
            role="img"
            aria-label="Imagen del servicio Algoritmo PIG pendiente"
          >
            <span
              class="np-pig-hero__media-icon"
              aria-hidden="true"
            >
              ${iconImage()}
            </span>

            <span class="np-pig-hero__media-text">
              Imagen pendiente
            </span>
          </div>

          <div class="np-pig-hero__badge">
            <span
              class="np-pig-hero__badge-icon"
              aria-hidden="true"
            >
              ${iconAnalytics()}
            </span>

            <div>
              <p class="np-pig-hero__badge-title">
                Diagnóstico en Tiempo Real
              </p>

              <p class="np-pig-hero__badge-text">
                Identificamos puntos críticos antes de que se conviertan
                en un problema.
              </p>
            </div>
          </div>
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

function iconAnalytics() {
  return `
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="3"
        stroke="currentColor"
        stroke-width="1.7"
      />

      <path
        d="M8 15v-3M12 15V9M16 15v-6"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
      />
    </svg>
  `;
}
