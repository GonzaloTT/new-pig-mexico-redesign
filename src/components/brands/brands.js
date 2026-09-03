import './brands.css';

const BASE_URL = import.meta.env.BASE_URL;

const brands = [
  {
    id: 'brand-01',
    image:
      `${BASE_URL}images/brands/brand-01.png`
  },
  {
    id: 'brand-02',
    image:
      `${BASE_URL}images/brands/brand-02.png`
  },
  {
    id: 'brand-03',
    image:
      `${BASE_URL}images/brands/brand-03.png`
  },
  {
    id: 'brand-04',
    image:
      `${BASE_URL}images/brands/brand-04.png`
  },
  {
    id: 'brand-05',
    image:
      `${BASE_URL}images/brands/brand-05.png`
  },
  {
    id: 'brand-06',
    image:
      `${BASE_URL}images/brands/brand-06.png`
  },
  {
    id: 'brand-07',
    image:
      `${BASE_URL}images/brands/brand-07.png`
  },
  {
    id: 'brand-08',
    image:
      `${BASE_URL}images/brands/brand-08.png`
  },
  {
    id: 'brand-09',
    image:
      `${BASE_URL}images/brands/brand-09.png`
  },
  {
    id: 'brand-10',
    image:
      `${BASE_URL}images/brands/brand-10.png`
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
