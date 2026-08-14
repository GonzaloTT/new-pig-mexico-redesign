import { heroSlides } from '../data/hero-slides.js';

const AUTOPLAY_DELAY = 6000;
const TRANSITION_DURATION = 900;
const MOBILE_BREAKPOINT = 767;

export function initHeroCarousel() {
  const hero = document.querySelector('[data-hero-carousel]');

  if (!hero || heroSlides.length === 0) {
    return;
  }

  const backgroundLayers = [
    hero.querySelector('[data-hero-background="active"]'),
    hero.querySelector('[data-hero-background="next"]')
  ];

  const controls = hero.querySelector(
    '.np-hero__carousel-controls'
  );

  if (
    !backgroundLayers[0] ||
    !backgroundLayers[1]
  ) {
    return;
  }

  let currentSlide = 0;
  let activeLayerIndex = 0;
  let autoplayTimer = null;
  let transitionTimer = null;
  let isTransitioning = false;

  const prefersReducedMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

  /* ================================================================
     Helpers
     ================================================================ */

  function getSlideImage(slide) {
    const isMobile =
      window.matchMedia(
        `(max-width: ${MOBILE_BREAKPOINT}px)`
      ).matches;

    return isMobile
      ? slide.mobileImage
      : slide.desktopImage;
  }

  function setLayerImage(layer, slide) {
    const image = getSlideImage(slide);

    layer.style.setProperty(
      '--np-hero-bg-image',
      `url("${image}")`
    );
  }

  /* ================================================================
     Indicators
     ================================================================ */

  function createIndicators() {
    if (!controls) {
      return;
    }

    controls.innerHTML = heroSlides
      .map((slide, index) => {
        return `
          <button
            type="button"
            class="np-hero__carousel-indicator"
            data-hero-slide-index="${index}"
            aria-label="Mostrar diapositiva ${index + 1}"
            aria-current="${index === 0 ? 'true' : 'false'}"
          ></button>
        `;
      })
      .join('');

    controls
      .querySelectorAll('[data-hero-slide-index]')
      .forEach((indicator) => {
        indicator.addEventListener(
          'click',
          handleIndicatorClick
        );
      });
  }

  function handleIndicatorClick(event) {
    const index = Number(
      event.currentTarget.dataset.heroSlideIndex
    );

    if (
      Number.isNaN(index) ||
      index === currentSlide
    ) {
      return;
    }

    showSlide(index);

    restartAutoplay();
  }

  function updateIndicators() {
    if (!controls) {
      return;
    }

    const indicators =
      controls.querySelectorAll(
        '[data-hero-slide-index]'
      );

    indicators.forEach((indicator, index) => {
      indicator.setAttribute(
        'aria-current',
        index === currentSlide
          ? 'true'
          : 'false'
      );
    });
  }

  /* ================================================================
     Slide content
     ================================================================ */

  function updateContentVisibility(slide) {
    hero.dataset.showContent =
      String(slide.showContent);

    hero.dataset.showSidebar =
      String(slide.showSidebar);

    hero.dataset.slide = slide.id;
  }

  /* ================================================================
     Crossfade
     ================================================================ */

  function showSlide(index, options = {}) {
    const { immediate = false } = options;

    if (
      index < 0 ||
      index >= heroSlides.length
    ) {
      return;
    }

    const nextSlide = heroSlides[index];

    /*
     * Primera carga:
     * No necesitamos animar entre dos imágenes.
     */
    if (immediate) {
      const activeLayer =
        backgroundLayers[activeLayerIndex];

      setLayerImage(
        activeLayer,
        nextSlide
      );

      activeLayer.classList.add(
        'np-hero__background--active'
      );

      currentSlide = index;

      updateContentVisibility(nextSlide);
      updateIndicators();

      return;
    }

    if (isTransitioning) {
      return;
    }

    isTransitioning = true;

    const currentLayer =
      backgroundLayers[activeLayerIndex];

    const nextLayerIndex =
      activeLayerIndex === 0 ? 1 : 0;

    const nextLayer =
      backgroundLayers[nextLayerIndex];

    setLayerImage(
      nextLayer,
      nextSlide
    );

    /*
     * Forzamos al navegador a registrar primero
     * la nueva imagen con opacity 0.
     */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        nextLayer.classList.add(
          'np-hero__background--active'
        );

        currentLayer.classList.remove(
          'np-hero__background--active'
        );

        updateContentVisibility(nextSlide);

        currentSlide = index;
        activeLayerIndex = nextLayerIndex;

        updateIndicators();

        transitionTimer =
          window.setTimeout(() => {
            isTransitioning = false;
          }, TRANSITION_DURATION);
      });
    });
  }

  /* ================================================================
     Navigation
     ================================================================ */

  function nextSlide() {
    const nextIndex =
      (currentSlide + 1) %
      heroSlides.length;

    showSlide(nextIndex);
  }

  /* ================================================================
     Autoplay
     ================================================================ */

  function startAutoplay() {
    stopAutoplay();

    if (
      heroSlides.length <= 1 ||
      prefersReducedMotion.matches
    ) {
      return;
    }

    autoplayTimer =
      window.setInterval(
        nextSlide,
        AUTOPLAY_DELAY
      );
  }

  function stopAutoplay() {
    if (!autoplayTimer) {
      return;
    }

    window.clearInterval(
      autoplayTimer
    );

    autoplayTimer = null;
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  /* ================================================================
     Responsive
     ================================================================ */

  function updateCurrentImage() {
    const activeLayer =
      backgroundLayers[activeLayerIndex];

    setLayerImage(
      activeLayer,
      heroSlides[currentSlide]
    );
  }

  /* ================================================================
     Interaction
     ================================================================ */

  function handleVisibilityChange() {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }

  /* ================================================================
     Initialization
     ================================================================ */

  createIndicators();

  showSlide(0, {
    immediate: true
  });

  /*
   * Precarga las imágenes para reducir flashes
   * durante el primer ciclo del carrusel.
   */
  heroSlides.forEach((slide) => {
    const desktopImage =
      new Image();

    desktopImage.src =
      slide.desktopImage;

    if (
      slide.mobileImage !==
      slide.desktopImage
    ) {
      const mobileImage =
        new Image();

      mobileImage.src =
        slide.mobileImage;
    }
  });

  startAutoplay();

  /* Pausar al interactuar con el Hero */
  hero.addEventListener(
    'mouseenter',
    stopAutoplay
  );

  hero.addEventListener(
    'mouseleave',
    startAutoplay
  );

  hero.addEventListener(
    'focusin',
    stopAutoplay
  );

  hero.addEventListener(
    'focusout',
    startAutoplay
  );

  window.addEventListener(
    'resize',
    updateCurrentImage
  );

  document.addEventListener(
    'visibilitychange',
    handleVisibilityChange
  );

  prefersReducedMotion.addEventListener(
    'change',
    restartAutoplay
  );
}