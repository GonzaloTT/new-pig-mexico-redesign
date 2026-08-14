const BASE_URL = import.meta.env.BASE_URL;

export const heroSlides = [
  {
    id: 'main',
    desktopImage: `${BASE_URL}images/hero/hero-new-pig.png`,
    mobileImage: `${BASE_URL}images/hero/hero-new-pig.png`,

    showContent: true,
    showSidebar: true
  },

  /*
   * Slide temporal para probar el comportamiento del carrusel.
   * Sustituir cuando llegue el asset real.
   */
  {
    id: 'test-slide',

    desktopImage:
      `${BASE_URL}images/hero/hero-new-pig.png`,

    mobileImage:
      `${BASE_URL}images/hero/hero-new-pig.png`,

    showContent: false,
    showSidebar: false
  }

  // Se activarán cuando recibamos las imágenes reales.
  /*
  {
    id: 'promotion-01',
    desktopImage: `${BASE_URL}images/hero/hero-slide-02-desktop.webp`,
    mobileImage: `${BASE_URL}images/hero/hero-slide-02-mobile.webp`,

    showContent: false,
    showSidebar: false
  },

  {
    id: 'promotion-02',
    desktopImage: `${BASE_URL}images/hero/hero-slide-03-desktop.webp`,
    mobileImage: `${BASE_URL}images/hero/hero-slide-03-mobile.webp`,

    showContent: false,
    showSidebar: false
  }
  */
];