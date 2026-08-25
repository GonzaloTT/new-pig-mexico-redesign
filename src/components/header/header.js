import './header.css';
const BASE_URL = import.meta.env.BASE_URL;

/**
 * createHeader
 * Devuelve el markup del header completo: topbar de contacto,
 * navegación principal, buscador visual, iconos de acción y
 * navegación móvil accesible.
 *
 * Migración futura: este componente podría dividirse en el header.liquid
 * del tema existente + un section-group si Shopify OS 2.0 lo permite.
 */
export function createHeader() {
  return `
    <header class="np-header" id="np-header">
      <!-- Barra superior de contacto -->
      <div class="np-header__topbar">
        <div class="np-container np-header__topbar-inner">
          <p class="np-header__topbar-message">
            ${iconPhone()}
            <span>Contáctanos para una asesoría gratuita y recomendación de productos</span>
          </p>
          <a href="tel:+524422901170" class="np-header__topbar-phone">
            Teléfono: +52 (442) 290 1170, 71, 72 y 74
          </a>
        </div>
      </div>

      <!-- Navegación principal -->
      <div class="np-header__main">
        <div class="np-container np-header__main-inner">
          <a
            href="${BASE_URL}"
            class="np-header__brand"
            aria-label="New Pig México, ir al inicio"
          >
            <span class="np-header__logo">
            <img
              src="${BASE_URL}images/logos/logo-new-pig-mexico.png"
              alt="New Pig México"
              class="np-header__logo-image"
            >
            </span>
            <span class="np-header__brand-text">
              <span class="np-header__brand-name">New Pig México</span>
              <span class="np-header__brand-tagline">Soluciones que protegen lo que importa</span>
            </span>
          </a>

          <nav class="np-header__nav" id="np-primary-nav" aria-label="Navegación principal">
            <ul class="np-header__nav-list">
              <li>
                <a href="${BASE_URL}" class="np-header__nav-link">
                  Inicio
                </a>
              </li>
              <li class="np-header__nav-item--dropdown">
                <a href="#" class="np-header__nav-link">
                  Productos
                  ${iconChevronDown()}
                </a>
              </li>
              <li><a href="${BASE_URL}#find-your-solution" class="np-header__nav-link">Encuentra tu Solución</a></li>
              <li><a href="#" class="np-header__nav-link">Cotizador</a></li>
              <li class="np-header__nav-item--dropdown">
              <button
                type="button"
                class="np-header__nav-link np-header__dropdown-toggle"
                aria-expanded="false"
                aria-haspopup="true"
                data-header-dropdown-toggle
              >
                Recursos
                ${iconChevronDown()}
              </button>

              <ul class="np-header__dropdown-menu">
              <li>
                  <a
                    href="${BASE_URL}algoritmo-pig/"
                    class="np-header__dropdown-link"
                  >
                    Algoritmo Pig
                  </a>
                </li>
                </ul>
              </li>
              <li><a href="#" class="np-header__nav-link">Blog</a></li>
              <li><a href="${BASE_URL}#about-us" class="np-header__nav-link">Acerca de Nosotros</a></li>
            </ul>
          </nav>

          <div class="np-header__actions">
            <form class="np-header__search" role="search" aria-label="Buscar productos">
              <label for="np-header-search-input" class="np-visually-hidden">
                Buscar productos, soluciones
              </label>
              <input
                type="search"
                id="np-header-search-input"
                class="np-header__search-input"
                placeholder="Buscar productos, soluciones..."
                autocomplete="off"
              />
              <button type="submit" class="np-header__search-button" aria-label="Buscar">
                ${iconSearch()}
              </button>
            </form>

            <a href="#" class="np-button--icon np-header__action" aria-label="Contactar por WhatsApp">
              ${iconWhatsapp()}
            </a>
            <a href="#" class="np-button--icon np-header__action" aria-label="Mi cuenta">
              ${iconUser()}
            </a>
            <a href="#" class="np-button--icon np-header__action" aria-label="Carrito de compras">
              ${iconCart()}
            </a>

            <button
              type="button"
              class="np-header__menu-toggle"
              id="np-menu-toggle"
              aria-label="Abrir menú de navegación"
              aria-expanded="false"
              aria-controls="np-mobile-nav"
            >
              ${iconMenu()}
            </button>
          </div>
        </div>
      </div>

      <!-- Navegación móvil -->
      <nav
        class="np-header__mobile-nav"
        id="np-mobile-nav"
        aria-label="Navegación móvil"
        data-state="closed"
      >
        <ul class="np-header__mobile-nav-list">
          <li>
            <a
              href="${BASE_URL}"
              class="np-header__mobile-nav-link"
            >
              Inicio
            </a>
          </li>
          <li><a href="#" class="np-header__mobile-nav-link">Productos</a></li>
          <li>
            <a
            href="${BASE_URL}#find-your-solution"
            class="np-header__mobile-nav-link"
            >
              Encuentra tu Solución
            </a>
          </li>
          <li><a href="#" class="np-header__mobile-nav-link">Cotizador</a></li>
          <li><a href="#" class="np-header__mobile-nav-link">Recursos</a></li>
          <li>
            <a
              href="${BASE_URL}algoritmo-pig/"
              class="np-header__mobile-nav-link"
            >
              Algoritmo Pig
            </a>
          </li>
          <li><a href="#" class="np-header__mobile-nav-link">Blog</a></li>
          <li>
            <a
              href="${BASE_URL}#about-us"
              class="np-header__mobile-nav-link"
            >
              Acerca de Nosotros
            </a>
          </li>
      </nav>
      <div class="np-header__overlay" id="np-header-overlay" data-state="closed"></div>
    </header>
  `;
}

/* ---------------------------------------------------------------------
   Iconos SVG inline (sin dependencias externas)
   --------------------------------------------------------------------- */

function iconPhone() {
  return `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function iconChevronDown() {
  return `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="np-header__chevron">
      <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function iconSearch() {
  return `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
      <path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `;
}

function iconWhatsapp() {
  return `
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-3.7-6.8L20 4l-1.2 3.7A8 8 0 0 1 20 12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.3 0 .6 0 .8-.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;
}

function iconUser() {
  return `
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M4.5 20c1.4-3.5 4.3-5.5 7.5-5.5s6.1 2 7.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;
}

function iconCart() {
  return `
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 4h2l2.4 11.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="10" cy="20" r="1.3" fill="currentColor"/>
      <circle cx="17" cy="20" r="1.3" fill="currentColor"/>
    </svg>
  `;
}

function iconMenu() {
  return `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `;
}
