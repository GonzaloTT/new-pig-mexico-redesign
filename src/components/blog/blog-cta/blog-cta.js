import './blog-cta.css';

/**
 * createBlogCta
 *
 * Bloque final de conversión de la página Blog.
 *
 * Objetivo:
 * - conectar el contenido educativo con una acción comercial;
 * - dirigir al usuario al cotizador;
 * - ofrecer contacto directo con un especialista.
 */
export function createBlogCta() {
  return `
    <section
      class="np-blog-cta np-section"
      aria-labelledby="np-blog-cta-title"
    >
      <div class="np-container">

        <div class="np-blog-cta__content">

          <h2
            id="np-blog-cta-title"
            class="np-blog-cta__title"
          >
            ¿Necesitas una solución para tu operación?
          </h2>

          <p class="np-blog-cta__description">
            Nuestros especialistas pueden ayudarte a identificar la mejor
            solución para prevenir derrames, mejorar la seguridad y optimizar
            tus procesos industriales con tecnología de clase mundial.
          </p>

          <div class="np-blog-cta__actions">

            <a
              href="${import.meta.env.BASE_URL}cotizador/"
              class="np-button np-button--accent np-blog-cta__primary"
            >
              Solicitar cotización
            </a>

            <a
              href="tel:+524422901170"
              class="np-button np-button--outline-dark np-blog-cta__secondary"
            >
              ${iconPhone()}
              Hablar con un especialista
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
      width="18"
      height="18"
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