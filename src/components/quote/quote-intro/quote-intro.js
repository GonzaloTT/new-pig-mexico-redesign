import './quote-intro.css';

const BASE_URL = import.meta.env.BASE_URL;

/**
 * createQuoteIntro
 *
 * Encabezado introductorio de la página Cotizador.
 *
 * Incluye:
 * - breadcrumb
 * - título principal
 * - descripción breve
 */
export function createQuoteIntro() {
  return `
    <section
      class="np-quote-intro np-section"
      aria-labelledby="np-quote-intro-title"
    >
      <div class="np-container">

        <nav
          class="np-quote-intro__breadcrumb"
          aria-label="Breadcrumb"
        >
          <a
            href="${BASE_URL}"
            class="np-quote-intro__breadcrumb-link"
          >
            Inicio
          </a>

          <span
            class="np-quote-intro__breadcrumb-separator"
            aria-hidden="true"
          >
            ›
          </span>

          <span
            class="np-quote-intro__breadcrumb-current"
            aria-current="page"
          >
            Cotización rápida
          </span>
        </nav>

        <div class="np-quote-intro__content">

          <p class="np-quote-intro__eyebrow">
            Cotización rápida
          </p>

          <h1
            id="np-quote-intro-title"
            class="np-quote-intro__title"
          >
            Cotiza los productos que necesita tu operación
          </h1>

          <p class="np-quote-intro__description">
            ¿Ya sabes qué productos necesitas? Agrega los productos de tu
            interés, revisa el costo estimado y envía tu solicitud de
            cotización en pocos pasos.
          </p>

        </div>

      </div>
    </section>
  `;
}