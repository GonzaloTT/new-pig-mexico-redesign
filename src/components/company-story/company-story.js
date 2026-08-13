import './company-story.css';
const BASE_URL = import.meta.env.BASE_URL;

/**
 * createCompanyStory
 * Sección de trayectoria: imagen del equipo (placeholder), etiqueta
 * amarilla superpuesta, eyebrow, título, descripción y métricas.
 *
 * Migración futura: sections/np-company-story.liquid — image, eyebrow,
 * title, description como section.settings; las métricas como
 * section.blocks tipo "metric" (value + label).
 */
export function createCompanyStory() {
  return `
    <section class="np-company-story np-section np-section--gray" aria-labelledby="np-company-story-title">
      <div class="np-container np-company-story__grid">
        <div class="np-company-story__media">
          <div class="np-company-story__image-wrapper">
            <img
              src="${BASE_URL}images/company-story/company-story-team.png"
              alt="Equipo de New Pig México"
              class="np-company-story__image"
              loading="lazy"
            />
          </div>
          <span class="np-badge np-company-story__badge">
            ${iconGlobe()}
            Expertos en normatividad
          </span>
        </div>

        <div class="np-company-story__content">
          <p class="np-eyebrow np-company-story__eyebrow">Nuestra trayectoria</p>
          <h2 id="np-company-story-title" class="np-company-story__title">
            Más que un proveedor, somos su aliado estratégico
          </h2>
          <p class="np-company-story__description">
            Con décadas liderando el mercado en México, New Pig combina
            innovación técnica con un profundo conocimiento de las
            regulaciones locales e internacionales.
          </p>

          <div class="np-company-story__metrics">
            <div class="np-company-story__metric">
              <p class="np-company-story__metric-value">+35 años</p>
              <p class="np-company-story__metric-label">Experiencia</p>
            </div>
            <div class="np-company-story__metric">
              <p class="np-company-story__metric-value">10,000+</p>
              <p class="np-company-story__metric-label">Clientes industriales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}



function iconGlobe() {
  return `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/>
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9z" stroke="currentColor" stroke-width="1.4"/>
    </svg>
  `;
}