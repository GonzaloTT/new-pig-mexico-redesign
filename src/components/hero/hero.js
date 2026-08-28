const BASE_URL = import.meta.env.BASE_URL;
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
    <section
      class="np-hero"
      aria-labelledby="np-hero-title"
      data-hero-carousel
      data-show-content="true"
      data-show-sidebar="true"
    >

      <!-- ============================================================
           Capas visuales del carrusel
           Dos layers permiten hacer crossfade entre imágenes.
           ============================================================ -->
      <div class="np-hero__backgrounds" aria-hidden="true">
        <div
          class="np-hero__background np-hero__background--active"
          data-hero-background="active"
        ></div>

        <div
          class="np-hero__background"
          data-hero-background="next"
        ></div>
      </div>

      <div class="np-container np-hero__inner">

        <!-- ==========================================================
             Columna izquierda
             ========================================================== -->
        <div class="np-hero__content">

          <!-- Este contenido solamente pertenece al slide principal -->
          <div class="np-hero__primary-content">
            <p class="np-eyebrow">
              — Nueva línea —
            </p>

            <h1
              id="np-hero-title"
              class="np-hero__title"
            >
              Derrames pequeños.
              <br>
              <span class="np-text-accent">
                Nuestra misión.
              </span>
            </h1>

            <p class="np-hero__description np-text-muted-on-dark">
              Soluciones prácticas y efectivas para controlar derrames,
              mantener la seguridad y cumplir con las normas.
            </p>
          </div>

          <!-- Los CTA permanececen visibles en TODOS los slides -->
          <div class="np-hero__actions">
            <a
              href="${BASE_URL}catalogo/"
              class="np-button np-button--accent"
            >
              Ver catálogo
              ${iconArrowRight()}
            </a>

            <a
              href="#"
              class="np-button np-button--outline"
            >
              Solicitar asesoría gratuita
              ${iconWhatsappSmall()}
            </a>
          </div>
        </div>

        <!-- Espacio visual central en desktop -->
        <div
          class="np-hero__visual"
          aria-hidden="true"
        ></div>

        <!-- ==========================================================
             Sidebar: solamente slide principal
             ========================================================== -->
        <aside
          class="np-hero__sidebar"
          aria-label="Beneficios destacados"
        >
          ${heroSidebarItem(
            'shield',
            'Protege',
            'Al personal, equipos e instalaciones.'
          )}

          ${heroSidebarItem(
            'check-circle',
            'Cumple',
            'Con normas y regulaciones ambientales.'
          )}

          ${heroSidebarItem(
            'dollar',
            'Ahorra',
            'Tiempo, dinero y recursos en limpieza.'
          )}

          ${heroSidebarItem(
            'leaf',
            'Sostenible',
            'Soluciones responsables con el medio ambiente.'
          )}
        </aside>
      </div>

      <!-- ============================================================
           Indicadores del carrusel
           Se generan posteriormente desde JavaScript.
           ============================================================ -->
      <div
        class="np-hero__carousel-controls"
        aria-label="Diapositivas del hero"
      >
      </div>

    </section>
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
