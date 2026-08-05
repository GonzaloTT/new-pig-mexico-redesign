/**
 * src/scripts/navigation.js
 * Controla el menú móvil: apertura/cierre, sincronización de
 * aria-expanded, cierre al seleccionar un enlace, cierre con Escape
 * y cierre automático al pasar a viewport de escritorio.
 */

const DESKTOP_BREAKPOINT = 1024;

export function initNavigation() {
  const toggleButton = document.getElementById('np-menu-toggle');
  const mobileNav = document.getElementById('np-mobile-nav');
  const overlay = document.getElementById('np-header-overlay');

  if (!toggleButton || !mobileNav || !overlay) {
    return;
  }

  const mobileLinks = mobileNav.querySelectorAll('.np-header__mobile-nav-link');

  function openMenu() {
    mobileNav.dataset.state = 'open';
    overlay.dataset.state = 'open';
    toggleButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.dataset.state = 'closed';
    overlay.dataset.state = 'closed';
    toggleButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen = mobileNav.dataset.state === 'open';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  toggleButton.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav.dataset.state === 'open') {
      closeMenu();
      toggleButton.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= DESKTOP_BREAKPOINT && mobileNav.dataset.state === 'open') {
      closeMenu();
    }
  });
}