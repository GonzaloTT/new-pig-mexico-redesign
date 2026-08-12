import './expert-search.css';

/**
 * createExpertSearch
 * Sección "Expertos en Control de Derrames y Seguridad Industrial".
 *
 * Desktop:
 * - Columna izquierda: título, descripción, CTAs, buscador y chips.
 * - Columna derecha: imagen.
 *
 * Mobile/tablet:
 * - El contenido se apila en una sola columna.
 *
 * Migración futura:
 * sections/np-expert-search.liquid
 */
export function createExpertSearch() {
  return `
    <section
      class="np-expert-search np-section"
      aria-labelledby="np-expert-search-title"
    >
      <div class="np-container np-expert-search__container">

        <div class="np-expert-search__content">
          <div class="np-expert-search__intro">
            <h2
              id="np-expert-search-title"
              class="np-expert-search__title"
            >
              Expertos en Control de Derrames y Seguridad Industrial
            </h2>

            <p class="np-expert-search__description">
              No solo vendemos productos; brindamos soluciones normativas y
              técnicas para proteger a su personal y al medio ambiente con los
              estándares globales más estrictos.
            </p>

            <div class="np-expert-search__actions">
              <a href="#" class="np-button np-button--accent">
                Encontrar mi solución
              </a>

              <a href="#" class="np-button np-button--outline-dark">
                Solicitar cotización
              </a>
            </div>
          </div>

          <div class="np-expert-search__panel">
            <form
              class="np-expert-search__form"
              id="np-expert-search-form"
              novalidate
            >
              <label
                for="np-expert-search-input"
                class="np-visually-hidden"
              >
                ¿Qué problema necesitas resolver?
              </label>

              <div class="np-expert-search__field">
                <span
                  class="np-expert-search__field-icon"
                  aria-hidden="true"
                >
                  ${iconSearch()}
                </span>

                <input
                  type="text"
                  id="np-expert-search-input"
                  class="np-expert-search__input"
                  placeholder="¿Qué problema necesitas resolver?"
                  autocomplete="off"
                />

                <button
                  type="submit"
                  class="np-button np-button--primary np-expert-search__submit"
                >
                  Consultar experto
                </button>
              </div>

              <div
                class="np-expert-search__chips"
                role="group"
                aria-label="Sugerencias de búsqueda"
              >
                <button
                  type="button"
                  class="np-chip"
                  data-chip-value="Derrames de aceite"
                >
                  Derrames de aceite
                </button>

                <button
                  type="button"
                  class="np-chip"
                  data-chip-value="Químicos"
                >
                  Químicos
                </button>

                <button
                  type="button"
                  class="np-chip"
                  data-chip-value="Mantenimiento"
                >
                  Mantenimiento
                </button>
              </div>

              <p
                class="np-form-message"
                id="np-expert-search-message"
                role="status"
                aria-live="polite"
                data-state="hidden"
                data-variant="info"
              >
                Esta es una vista de prototipo. La búsqueda y el envío de datos aún no están conectados.
              </p>
            </form>
          </div>
        </div>

        <div class="np-expert-search__media">
          <div class="np-expert-search__media-placeholder">
            <span class="np-expert-search__media-icon" aria-hidden="true">
              ${iconImage()}
            </span>

            <span class="np-expert-search__media-text">
              Imagen pendiente
            </span>
          </div>
        </div>

      </div>
    </section>
  `;
}

function iconSearch() {
  return `
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M21 21l-4.3-4.3"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
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
