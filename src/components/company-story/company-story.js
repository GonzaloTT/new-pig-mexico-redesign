import './company-story.css';

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
          <div class="np-company-story__image-placeholder" role="img" aria-label="Fotografía del equipo de New Pig México frente a sus oficinas">
            ${teamPlaceholderSvg()}
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

function teamPlaceholderSvg() {
  return `
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true">
      <rect width="480" height="320" fill="#dbe6f0"/>
      <rect x="0" y="220" width="480" height="100" fill="#c3d4e6"/>
      <rect x="40" y="60" width="120" height="140" fill="#ffffff" opacity="0.6"/>
      <rect x="320" y="60" width="120" height="140" fill="#ffffff" opacity="0.6"/>
      <g fill="#0a2540">
        <circle cx="150" cy="230" r="22"/>
        <rect x="132" y="252" width="36" height="60" rx="10"/>
        <circle cx="205" cy="220" r="24"/>
        <rect x="185" y="244" width="40" height="66" rx="10"/>
        <circle cx="265" cy="220" r="24"/>
        <rect x="245" y="244" width="40" height="66" rx="10"/>
        <circle cx="325" cy="230" r="22"/>
        <rect x="307" y="252" width="36" height="60" rx="10"/>
      </g>
    </svg>
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