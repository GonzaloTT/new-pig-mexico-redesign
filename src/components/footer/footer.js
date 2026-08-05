import './footer.css';

/**
 * createFooter
 * Footer completo: descripción de empresa, columnas de recursos y
 * legal, newsletter visual (no funcional) e iconos sociales.
 *
 * Migración futura: el footer suele mantenerse como el footer.liquid
 * existente del tema, o migrar a sections/np-footer.liquid con
 * section.blocks para cada columna de enlaces.
 */
export function createFooter() {
  const year = new Date().getFullYear();

  return `
    <footer class="np-footer">
      <div class="np-footer__top-line" aria-hidden="true"></div>
      <div class="np-container np-footer__grid">
        <div class="np-footer__brand">
          <p class="np-footer__brand-name">New Pig México</p>
          <p class="np-footer__description">
            Líder global en control de derrames y seguridad industrial.
            Protegiendo a las empresas con soluciones de clase mundial.
          </p>
          <div class="np-footer__social" aria-label="Redes sociales">
            <a href="#" class="np-footer__social-link" aria-label="Sitio web">${iconGlobe()}</a>
            <a href="#" class="np-footer__social-link" aria-label="Correo electrónico">${iconMail()}</a>
            <a href="#" class="np-footer__social-link" aria-label="Teléfono">${iconPhone()}</a>
          </div>
        </div>

        <nav class="np-footer__column" aria-labelledby="np-footer-resources-heading">
          <h3 id="np-footer-resources-heading" class="np-footer__column-title">Recursos</h3>
          <ul class="np-footer__list">
            <li><a href="#" class="np-footer__link">Soporte Técnico</a></li>
            <li><a href="#" class="np-footer__link">Preguntas Frecuentes</a></li>
            <li><a href="#" class="np-footer__link">Cumplimiento MSDS</a></li>
          </ul>
        </nav>

        <nav class="np-footer__column" aria-labelledby="np-footer-legal-heading">
          <h3 id="np-footer-legal-heading" class="np-footer__column-title">Legal</h3>
          <ul class="np-footer__list">
            <li><a href="#" class="np-footer__link">Privacidad</a></li>
            <li><a href="#" class="np-footer__link">Términos de Servicio</a></li>
            <li><a href="#" class="np-footer__link">Cookies</a></li>
          </ul>
        </nav>

        <div class="np-footer__column np-footer__newsletter">
          <h3 class="np-footer__column-title">Newsletter</h3>
          <p class="np-footer__newsletter-text">
            Suscríbete para recibir guías normativas actualizadas.
          </p>
          <form class="np-footer__newsletter-form" id="np-newsletter-form" novalidate>
            <label for="np-newsletter-email" class="np-visually-hidden">Correo electrónico</label>
            <div class="np-footer__newsletter-field">
              <input
                type="email"
                id="np-newsletter-email"
                class="np-footer__newsletter-input"
                placeholder="Tu email"
                autocomplete="email"
              />
              <button type="submit" class="np-footer__newsletter-submit" aria-label="Suscribirse">
                Ir
              </button>
            </div>
            <p
              class="np-form-message"
              id="np-newsletter-message"
              role="status"
              aria-live="polite"
              data-state="hidden"
              data-variant="success"
            >
              Esta es una vista de prototipo. La suscripción aún no está conectada.
            </p>
          </form>
        </div>
      </div>

      <div class="np-container np-footer__bottom">
        <p class="np-footer__copyright">
          &copy; ${year} New Pig México. Todos los derechos reservados. Seguridad Industrial Líder.
        </p>
      </div>
    </footer>
  `;
}

function iconGlobe() {
  return `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/>
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9z" stroke="currentColor" stroke-width="1.4"/>
    </svg>
  `;
}

function iconMail() {
  return `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/>
      <path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function iconPhone() {
  return `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}