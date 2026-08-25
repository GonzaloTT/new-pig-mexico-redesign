const DESKTOP_BREAKPOINT = 1024;

export function initNavigation() {
  initMobileNavigation();
  initDesktopDropdowns();
}

function initMobileNavigation() {
  const toggleButton =
    document.getElementById('np-menu-toggle');

  const mobileNav =
    document.getElementById('np-mobile-nav');

  const overlay =
    document.getElementById('np-header-overlay');

  if (!toggleButton || !mobileNav || !overlay) {
    return;
  }

  const mobileLinks =
    mobileNav.querySelectorAll(
      '.np-header__mobile-nav-link'
    );

  function openMenu() {
    mobileNav.dataset.state = 'open';
    overlay.dataset.state = 'open';

    toggleButton.setAttribute(
      'aria-expanded',
      'true'
    );

    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.dataset.state = 'closed';
    overlay.dataset.state = 'closed';

    toggleButton.setAttribute(
      'aria-expanded',
      'false'
    );

    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen =
      mobileNav.dataset.state === 'open';

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  toggleButton.addEventListener(
    'click',
    toggleMenu
  );

  overlay.addEventListener(
    'click',
    closeMenu
  );

  mobileLinks.forEach((link) => {
    link.addEventListener(
      'click',
      closeMenu
    );
  });

  document.addEventListener(
    'keydown',
    (event) => {
      if (
        event.key === 'Escape' &&
        mobileNav.dataset.state === 'open'
      ) {
        closeMenu();
        toggleButton.focus();
      }
    }
  );

  window.addEventListener(
    'resize',
    () => {
      if (
        window.innerWidth >=
          DESKTOP_BREAKPOINT &&
        mobileNav.dataset.state === 'open'
      ) {
        closeMenu();
      }
    }
  );
}

function initDesktopDropdowns() {
  const toggles =
    document.querySelectorAll(
      '[data-header-dropdown-toggle]'
    );

  if (!toggles.length) {
    return;
  }

  function closeAllDropdowns(
    exceptToggle = null
  ) {
    toggles.forEach((toggle) => {
      if (toggle === exceptToggle) {
        return;
      }

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );

      const item =
        toggle.closest(
          '.np-header__nav-item--dropdown'
        );

      if (item) {
        item.dataset.state = 'closed';
      }
    });
  }

  toggles.forEach((toggle) => {
    const item =
      toggle.closest(
        '.np-header__nav-item--dropdown'
      );

    if (!item) {
      return;
    }

    item.dataset.state = 'closed';

    toggle.addEventListener(
      'click',
      (event) => {
        event.stopPropagation();

        const isOpen =
          toggle.getAttribute(
            'aria-expanded'
          ) === 'true';

        closeAllDropdowns(toggle);

        toggle.setAttribute(
          'aria-expanded',
          String(!isOpen)
        );

        item.dataset.state =
          isOpen ? 'closed' : 'open';
      }
    );
  });

  document.addEventListener(
    'click',
    () => {
      closeAllDropdowns();
    }
  );

  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key !== 'Escape') {
        return;
      }

      const openToggle =
        document.querySelector(
          '[data-header-dropdown-toggle][aria-expanded="true"]'
        );

      closeAllDropdowns();

      if (openToggle) {
        openToggle.focus();
      }
    }
  );
}
