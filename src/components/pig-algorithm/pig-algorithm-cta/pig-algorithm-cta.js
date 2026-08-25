import './pig-algorithm-cta.css';

/**
 * createPigAlgorithmCta
 *
 * Bloque final de conversión para la página Algoritmo PIG.
 *
 * Objetivo:
 * - reforzar la necesidad de evaluación;
 * - dirigir al usuario a una acción principal;
 * - ofrecer contacto directo con un especialista.
 */
export function createPigAlgorithmCta() {
  return `
    <section
      class="np-pig-cta np-section"
      aria-labelledby="np-pig-cta-title"
    >
      <div class="np-container">
        <div class="np-pig-cta__content">

          <h2
            id="np-pig-cta-title"
            class="np-pig-cta__title"
          >
            ¿Qué tan protegida está tu operación?
          </h2>

          <p class="np-pig-cta__description">
            No esperes a que ocurra un derrame para actuar.
            Solicita una evaluación profesional y comienza a identificar
            oportunidades para mejorar la seguridad de tu operación.
          </p>

          <div class="np-pig-cta__actions">
            <a
              href="#"
              class="np-button np-button--accent np-pig-cta__primary"
            >
              Agendar evaluación gratuita
            </a>

            <a
              href="tel:+524422901170"
              class="np-pig-cta__contact"
            >
              <span
                class="np-pig-cta__contact-icon"
                aria-hidden="true"
              >
                ${iconPhone()}
              </span>

              <span>
                Hablar con un especialista
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  `;
}

function iconPhone() {
  return `
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}
