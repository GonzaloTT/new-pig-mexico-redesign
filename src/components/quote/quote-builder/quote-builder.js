import './quote-builder.css';

const BASE_URL = import.meta.env.BASE_URL;

/**
 * createQuoteBuilder
 *
 * Contenedor principal del cotizador.
 *
 * Estado actual:
 * - sin productos agregados;
 * - resumen en $0.00 MXN;
 * - botón de envío deshabilitado.
 *
 * Futuro:
 * - recibir productos desde catálogo;
 * - modificar cantidades;
 * - eliminar productos;
 * - calcular subtotal, impuestos y total.
 */
export function createQuoteBuilder() {
  return `
    <section
      class="np-quote-builder np-section"
      aria-labelledby="np-quote-builder-title"
    >
      <div class="np-container np-quote-builder__container">

        <div class="np-quote-builder__products">

          <div class="np-quote-builder__products-header">
            <div>
              <p class="np-quote-builder__eyebrow">
                Productos seleccionados
              </p>

              <h2
                id="np-quote-builder-title"
                class="np-quote-builder__title"
              >
                Tu cotización
              </h2>
            </div>

            <span class="np-quote-builder__count">
              0 productos
            </span>
          </div>

          <div class="np-quote-builder__empty">
            <span
              class="np-quote-builder__empty-icon"
              aria-hidden="true"
            >
              ${iconQuote()}
            </span>

            <h3 class="np-quote-builder__empty-title">
              Tu cotización aún está vacía
            </h3>

            <p class="np-quote-builder__empty-description">
              Agrega productos desde nuestro catálogo para comenzar a
              preparar tu solicitud de cotización.
            </p>

            <a
              href="${BASE_URL}"
              class="np-button np-button--outline-dark"
            >
              Explorar catálogo
              ${iconArrowRight()}
            </a>
          </div>

        </div>

        <aside
          class="np-quote-summary"
          aria-labelledby="np-quote-summary-title"
        >
          <h2
            id="np-quote-summary-title"
            class="np-quote-summary__title"
          >
            Resumen de cotización
          </h2>

          <div class="np-quote-summary__details">

            <div class="np-quote-summary__row">
              <span>Productos</span>

              <span>
                $0.00
              </span>
            </div>

            <div class="np-quote-summary__row">
              <span>
                Impuestos (IVA 16%)
              </span>

              <span>
                $0.00
              </span>
            </div>

          </div>

          <div class="np-quote-summary__total">
            <span>
              Total estimado
            </span>

            <strong>
              $0.00 MXN
            </strong>
          </div>

          <p class="np-quote-summary__note">
            Este monto es aproximado. Un especialista validará
            disponibilidad, cantidades y condiciones comerciales
            antes de emitir la cotización final.
          </p>

          <button
            type="button"
            class="np-button np-button--accent np-quote-summary__submit"
            disabled
          >
            Enviar solicitud de cotización
          </button>

          <div class="np-quote-summary__security">
            ${iconShield()}

            <span>
              Solicitud segura y profesional
            </span>
          </div>
        </aside>

      </div>
    </section>
  `;
}

function iconQuote() {
  return `
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 5h12v14H6z"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linejoin="round"
      />

      <path
        d="M9 9h6M9 13h4"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
      />
    </svg>
  `;
}

function iconArrowRight() {
  return `
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

function iconShield() {
  return `
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linejoin="round"
      />

      <path
        d="M8.5 12.3l2.3 2.3 4.7-4.9"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}