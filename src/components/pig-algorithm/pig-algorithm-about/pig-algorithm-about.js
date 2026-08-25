import './pig-algorithm-about.css';

/**
 * createPigAlgorithmAbout
 *
 * Explica qué es el Algoritmo PIG y sus principales beneficios.
 *
 * Desktop:
 * - imagen / diagrama a la izquierda
 * - contenido a la derecha
 *
 * Mobile:
 * - contenido apilado
 *
 * La imagen queda temporalmente como placeholder.
 */
export function createPigAlgorithmAbout() {
  return `
    <section
      class="np-pig-about np-section"
      aria-labelledby="np-pig-about-title"
    >
      <div class="np-container np-pig-about__container">

        <div class="np-pig-about__media">
          <div
            class="np-pig-about__media-placeholder"
            role="img"
            aria-label="Diagrama explicativo del Algoritmo PIG pendiente"
          >
            <span
              class="np-pig-about__media-icon"
              aria-hidden="true"
            >
              ${iconImage()}
            </span>

            <span class="np-pig-about__media-text">
              Imagen pendiente
            </span>
          </div>
        </div>

        <div class="np-pig-about__content">
          <div class="np-pig-about__intro">
            <h2
              id="np-pig-about-title"
              class="np-pig-about__title"
            >
              ¿Qué es el Algoritmo PIG?
            </h2>

            <p class="np-pig-about__description">
              No es solo un catálogo de productos; es una metodología
              consultiva diseñada para analizar las condiciones de tu
              operación, detectar riesgos y recomendar soluciones que
              ayuden a trabajar bajo mejores estándares de seguridad
              y protección.
            </p>
          </div>

          <div class="np-pig-about__benefits">
            ${benefitItem(
              'diagnostic',
              'Diagnóstico personalizado',
              'Analizamos cada área de tu operación para identificar riesgos, necesidades y oportunidades de mejora.'
            )}

            ${benefitItem(
              'recommendations',
              'Recomendaciones especializadas',
              'Proponemos acciones y soluciones basadas en buenas prácticas y criterios de seguridad industrial.'
            )}

            ${benefitItem(
              'solutions',
              'Soluciones adaptadas',
              'Seleccionamos alternativas adecuadas a las necesidades, espacio y condiciones específicas de tu operación.'
            )}
          </div>
        </div>

      </div>
    </section>
  `;
}

function benefitItem(icon, title, description) {
  return `
    <article class="np-pig-about__benefit">
      <span
        class="np-pig-about__benefit-icon"
        aria-hidden="true"
      >
        ${getBenefitIcon(icon)}
      </span>

      <div class="np-pig-about__benefit-content">
        <h3 class="np-pig-about__benefit-title">
          ${title}
        </h3>

        <p class="np-pig-about__benefit-description">
          ${description}
        </p>
      </div>
    </article>
  `;
}

function getBenefitIcon(name) {
  const icons = {
    diagnostic: `
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          x="5"
          y="4"
          width="14"
          height="16"
          rx="2"
          stroke="currentColor"
          stroke-width="1.7"
        />

        <path
          d="M9 4.5h6M9 11l2 2 4-4"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `,

    recommendations: `
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 18h6M10 21h4"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
        />

        <path
          d="M8.2 14.5C6.8 13.4 6 11.8 6 10a6 6 0 1 1 12 0c0 1.8-.8 3.4-2.2 4.5-.8.6-1.3 1.4-1.4 2.3h-4.8c-.1-.9-.6-1.7-1.4-2.3Z"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linejoin="round"
        />
      </svg>
    `,

    solutions: `
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          stroke-width="1.7"
        />

        <path
          d="M12 8v4l3 2"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  };

  return icons[name] || '';
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
