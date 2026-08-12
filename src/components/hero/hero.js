import './hero.css';

/**
 * createHero
 * Sección hero principal: contenido a la izquierda (eyebrow, título,
 * descripción, CTAs) y composición visual placeholder a la derecha,
 * más un panel lateral oscuro con 4 beneficios rápidos.
 *
 * Migración futura: sections/np-hero.liquid — eyebrow, title, highlight,
 * description y CTAs como section.settings; los 4 items del panel lateral
 * como section.blocks de tipo "hero_highlight".
 */
export function createHero() {
  return `
    <section class="np-hero" aria-labelledby="np-hero-title">
      <div class="np-container np-hero__inner">
        <div class="np-hero__content">
          <p class="np-eyebrow">— Nueva línea —</p>
          <h1 id="np-hero-title" class="np-hero__title">
            Derrames pequeños.
            <br>
            <span class="np-text-accent">Nuestra misión.</span>
          </h1>
          <p class="np-hero__description np-text-muted-on-dark">
            Soluciones prácticas y efectivas para controlar derrames,
            mantener la seguridad y cumplir con las normas.
          </p>
          <div class="np-hero__actions">
            <a href="#" class="np-button np-button--accent">
              Ver catálogo
              ${iconArrowRight()}
            </a>
            <a href="#" class="np-button np-button--outline">
              Solicitar asesoría gratuita
              ${iconWhatsappSmall()}
            </a>
          </div>
        </div>

        <div class="np-hero__visual" aria-hidden="true">
          ${heroVisualPlaceholder()}
        </div>

        <aside class="np-hero__sidebar" aria-label="Beneficios destacados">
          ${heroSidebarItem('shield', 'Protege', 'al personal, equipos e instalaciones.')}
          ${heroSidebarItem('check-circle', 'Cumple', 'con normas y regulaciones ambientales.')}
          ${heroSidebarItem('dollar', 'Ahorra', 'tiempo, dinero y recursos en limpieza.')}
          ${heroSidebarItem('leaf', 'Sostenible', 'soluciones responsables con el medio ambiente.')}
        </aside>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------------------------
   Placeholder visual — composición de "productos" hecha con formas
   CSS/SVG locales. No usa imágenes externas.
   --------------------------------------------------------------------- */
function heroVisualPlaceholder() {
  return `
    <div class="np-hero__visual-frame">
      <svg viewBox="0 0 320 320" class="np-hero__visual-svg" role="img" aria-label="Composición ilustrativa de productos de contención de derrames">
        <defs>
          <linearGradient id="np-hero-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#2f6fce"/>
            <stop offset="100%" stop-color="#123a6b"/>
          </linearGradient>
        </defs>
        <circle cx="160" cy="160" r="150" fill="url(#np-hero-grad)" opacity="0.25"/>
        <!-- Silueta simplificada de "mascota" tipo cerdo, geometría básica -->
        <ellipse cx="160" cy="190" rx="95" ry="70" fill="#f6c9d1"/>
        <circle cx="230" cy="150" r="45" fill="#f6c9d1"/>
        <ellipse cx="248" cy="140" rx="8" ry="12" fill="#f6c9d1"/>
        <ellipse cx="255" cy="160" rx="18" ry="14" fill="#e79aa8"/>
        <circle cx="215" cy="140" r="4" fill="#3a2a2a"/>
        <circle cx="245" cy="140" r="4" fill="#3a2a2a"/>
        <!-- Gafas de seguridad -->
        <rect x="205" y="130" width="55" height="16" rx="8" fill="var(--np-color-accent)" opacity="0.9"/>
        <!-- Contenedor / cubeta amarilla -->
        <rect x="60" y="210" width="70" height="55" rx="6" fill="var(--np-color-accent)"/>
        <text x="95" y="242" text-anchor="middle" font-size="11" font-weight="700" fill="#123a6b">HAZ-MAT</text>
        <!-- Tapete absorbente -->
        <rect x="20" y="270" width="280" height="26" rx="4" fill="#dfe6ec" opacity="0.85"/>
      </svg>
    </div>
  `;
}

function heroSidebarItem(icon, title, description) {
  return `
    <div class="np-hero__sidebar-item">
      <span class="np-hero__sidebar-icon" aria-hidden="true">${getSidebarIcon(icon)}</span>
      <div>
        <p class="np-hero__sidebar-title">${title}</p>
        <p class="np-hero__sidebar-text">${description}</p>
      </div>
    </div>
  `;
}

function getSidebarIcon(name) {
  const icons = {
    shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    'check-circle': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 12.3l2.3 2.3 4.7-4.9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    dollar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v10M9.5 15c0 1.1 1.1 2 2.5 2s2.5-.8 2.5-2-1-1.6-2.5-2-2.5-.8-2.5-2 1.1-2 2.5-2 2.2.5 2.4 1.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
    leaf: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M5 19c0-4 2-7 6-9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`
  };
  return icons[name] || '';
}

function iconArrowRight() {
  return `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function iconWhatsappSmall() {
  return `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-3.7-6.8L20 4l-1.2 3.7A8 8 0 0 1 20 12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.3 0 .6 0 .8-.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;
}
