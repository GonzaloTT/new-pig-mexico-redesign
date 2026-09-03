import './brands.css';

const BASE_URL = import.meta.env.BASE_URL;

const brands = [
  {
    id: 'general-motors',
    image:
      `${BASE_URL}images/brands/general-motors-logo.webp`,
    alt: 'General Motors'
  },
  {
    id: 'vallen',
    image:
      `${BASE_URL}images/brands/vallen-logo.png`,
    alt: 'Vallen'
  },
  {
    id: 'fastenal',
    image:
      `${BASE_URL}images/brands/fastenal-logo.svg`,
    alt: 'Fastenal'
  },
  {
    id: 'mundo-seguridad',
    image:
      `${BASE_URL}images/brands/Mundo-Seguridad-logo.webp`,
    alt: 'Mundo de Seguridad'
  },
  {
    id: 'lozoya',
    image:
      `${BASE_URL}images/brands/Lozoya-logo.png`,
    alt: 'Lozoya'
  },
  {
    id: 'doall',
    image:
      `${BASE_URL}images/brands/doall_logo.png`,
    alt: 'Doall'
  },
  {
    id: 'sibsa',
    image:
      `${BASE_URL}images/brands/Sibsa-logo.webp`,
    alt: 'Sibsa'
  },
  {
    id: 'pib',
    image:
      `${BASE_URL}images/brands/PIB-logo.jpg`,
    alt: 'PIB'
  },
  {
    id: 'rayhsa',
    image:
      `${BASE_URL}images/brands/logo_rayhsa.png`,
    alt: 'Rayhsa'
  },
  {
    id: 'pro-seg-ind',
    image:
      `${BASE_URL}images/brands/brand-10.png`,
    alt: 'Pro-Seg-Ind'
  }
];

export function createBrands() {
  return `
    <section
      class="np-brands"
      aria-labelledby="np-brands-title"
    >
      <div class="np-container">
        <div class="np-brands__header">
          <h2
            id="np-brands-title"
            class="np-brands__title"
          >
            Confían en nosotros
          </h2>

          <p class="np-brands__subtitle">
            Empresas que confían en soluciones New Pig
            para proteger sus operaciones.
          </p>
        </div>

        <ul
          class="np-brands__list"
          aria-label="Clientes de New Pig México"
        >
          ${brands
            .map(renderBrandLogo)
            .join('')}
        </ul>
      </div>
    </section>
  `;
}

function renderBrandLogo(brand) {
  return `
    <li
      class="np-brands__item"
    >
      <img
        src="${brand.image}"
        alt=""
        class="np-brands__logo"
        loading="lazy"
        decoding="async"
      />
    </li>
  `;
}
