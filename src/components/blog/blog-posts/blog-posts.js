import './blog-posts.css';

const POSTS_PER_PAGE = 9;

const blogPosts = [
  {
    category: 'Control de derrames',
    date: '1 de diciembre, 2020',
    title: 'Técnicas y descontaminación para derrames',
    excerpt:
      'Conoce técnicas y prácticas para responder a derrames y realizar procesos de descontaminación de forma segura.',
    href: '#'
  },
  {
    category: 'Mantenimiento',
    date: '7 de noviembre, 2020',
    title: 'Mantenimiento de la máquina: consejos de mantenimiento preventivo',
    excerpt:
      'Descubre acciones preventivas que ayudan a mantener equipos y maquinaria trabajando de forma segura y eficiente.',
    href: '#'
  },
  {
    category: 'Control de derrames',
    date: '20 de octubre, 2020',
    title: '¿Qué hacer cuando un derrame no se ve bien?',
    excerpt:
      'Identifica factores de riesgo y aprende cómo actuar ante derrames que pueden representar un peligro mayor.',
    href: '#'
  },
  {
    category: 'Control de derrames',
    date: '5 de octubre, 2020',
    title: '12 mejores lugares para almacenar su kit para derrames',
    excerpt:
      'La ubicación de un kit puede hacer la diferencia durante una emergencia. Conoce dónde conviene tenerlo disponible.',
    href: '#'
  },
  {
    category: 'Absorbentes',
    date: '18 de septiembre, 2020',
    title: '¿Qué hay dentro de nuestras calcetas absorbentes que las hace tan especiales?',
    excerpt:
      'Conoce cómo funcionan las calcetas absorbentes y qué características permiten contener líquidos de manera efectiva.',
    href: '#'
  },
  {
    category: 'Cumplimiento',
    date: '1 de septiembre, 2020',
    title: 'Prevenga la contaminación de las aguas pluviales en sus instalaciones',
    excerpt:
      'Descubre prácticas para reducir el riesgo de que contaminantes lleguen a drenajes y sistemas de aguas pluviales.',
    href: '#'
  },
  {
    category: 'Absorbentes',
    date: '14 de agosto, 2020',
    title: '¿Cómo saber si su absorbente está saturado?',
    excerpt:
      'Aprende a identificar cuándo un absorbente alcanzó su capacidad y debe reemplazarse para mantener una respuesta segura.',
    href: '#'
  },
  {
    category: 'Control de derrames',
    date: '24 de julio, 2020',
    title: 'Respuesta a derrames Parte 1: Evaluación de riesgos',
    excerpt:
      'La evaluación del riesgo es el primer paso para diseñar una estrategia adecuada de prevención y respuesta a derrames.',
    href: '#'
  },
  {
    category: 'Absorbentes',
    date: '15 de julio, 2020',
    title: 'Capacitación absorbente Parte 2: Entendiendo los colores',
    excerpt:
      'Conoce qué representan los distintos colores de absorbentes y cómo elegir el adecuado para cada aplicación.',
    href: '#'
  },

  // Página 2
  {
    category: 'Absorbentes',
    date: '3 de julio, 2020',
    title: 'Capacitación sobre absorbentes Parte 1: Eligiendo el absorbente correcto',
    excerpt:
      'Compara diferentes tipos de absorbentes y aprende a seleccionar el más adecuado para el trabajo.',
    href: '#'
  },
  {
    category: 'Cumplimiento',
    date: '17 de junio, 2020',
    title: '#PigTips Soluciones de gestión para aguas pluviales',
    excerpt:
      'Explora soluciones para evitar que líquidos contaminados alcancen drenajes y sistemas pluviales.',
    href: '#'
  },
  {
    category: 'Seguridad industrial',
    date: '9 de junio, 2020',
    title: 'Cómo prevenir resbalones, tropiezos y caídas en su instalación',
    excerpt:
      'Reduce riesgos en pisos y áreas de trabajo mediante prácticas de prevención y mantenimiento.',
    href: '#'
  },
  {
    category: 'Cumplimiento',
    date: '1 de junio, 2020',
    title: '5 puntos principales de las regulaciones de contención secundaria',
    excerpt:
      'Conoce aspectos importantes relacionados con la contención secundaria y el manejo seguro de líquidos.',
    href: '#'
  },
  {
    category: 'Absorbentes',
    date: '16 de agosto, 2017',
    title: '¿Sabías que?',
    excerpt:
      'Conoce algunos datos sobre el uso de absorbentes en aplicaciones industriales y control de derrames.',
    href: '#'
  },
  {
    category: 'Mantenimiento',
    date: '8 de agosto, 2017',
    title: '¿Cómo escoger el wiper adecuado?',
    excerpt:
      'Conoce las diferencias entre distintos tipos de wipers y selecciona el más adecuado para cada tarea.',
    href: '#'
  }
];

export function createBlogPosts() {
  const totalPages = Math.ceil(
    blogPosts.length / POSTS_PER_PAGE
  );

  return `
    <section
      class="np-blog-posts np-section"
      aria-label="Artículos del blog"
    >
      <div class="np-container">

        <div
          class="np-blog-posts__grid"
          data-blog-posts-grid
        >
          ${blogPosts
            .map((post, index) =>
              renderBlogPost(post, index)
            )
            .join('')}
        </div>

        <nav
          class="np-blog-posts__pagination"
          aria-label="Paginación del blog"
          data-blog-pagination
        >
          <button
            type="button"
            class="np-blog-posts__pagination-control"
            data-blog-previous
            aria-label="Página anterior"
          >
            ${iconChevronLeft()}
            <span>Anterior</span>
          </button>

          <div class="np-blog-posts__pagination-pages">
            ${Array.from(
              { length: totalPages },
              (_, index) => `
                <button
                  type="button"
                  class="np-blog-posts__pagination-page"
                  data-blog-page="${index + 1}"
                  aria-label="Ir a la página ${index + 1}"
                  aria-current="${index === 0 ? 'page' : 'false'}"
                >
                  ${index + 1}
                </button>
              `
            ).join('')}
          </div>

          <button
            type="button"
            class="np-blog-posts__pagination-control"
            data-blog-next
            aria-label="Página siguiente"
          >
            <span>Siguiente</span>
            ${iconChevronRight()}
          </button>
        </nav>

      </div>
    </section>
  `;
}

export function initBlogPostsPagination() {
  const grid = document.querySelector(
    '[data-blog-posts-grid]'
  );

  const pagination = document.querySelector(
    '[data-blog-pagination]'
  );

  if (!grid || !pagination) {
    return;
  }

  const cards = Array.from(
    grid.querySelectorAll('[data-blog-post]')
  );

  const pageButtons = Array.from(
    pagination.querySelectorAll('[data-blog-page]')
  );

  const previousButton =
    pagination.querySelector('[data-blog-previous]');

  const nextButton =
    pagination.querySelector('[data-blog-next]');

  const totalPages = Math.ceil(
    cards.length / POSTS_PER_PAGE
  );

  let currentPage = 1;

  function showPage(page) {
    currentPage = Math.min(
      Math.max(page, 1),
      totalPages
    );

    const startIndex =
      (currentPage - 1) * POSTS_PER_PAGE;

    const endIndex =
      startIndex + POSTS_PER_PAGE;

    cards.forEach((card, index) => {
      const isVisible =
        index >= startIndex &&
        index < endIndex;

      card.hidden = !isVisible;
    });

    pageButtons.forEach((button) => {
      const pageNumber = Number(
        button.dataset.blogPage
      );

      button.setAttribute(
        'aria-current',
        pageNumber === currentPage
          ? 'page'
          : 'false'
      );
    });

    if (previousButton) {
      previousButton.disabled =
        currentPage === 1;
    }

    if (nextButton) {
      nextButton.disabled =
        currentPage === totalPages;
    }
  }

  pageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showPage(
        Number(button.dataset.blogPage)
      );

      scrollToBlog();
    });
  });

  previousButton?.addEventListener(
    'click',
    () => {
      showPage(currentPage - 1);
      scrollToBlog();
    }
  );

  nextButton?.addEventListener(
    'click',
    () => {
      showPage(currentPage + 1);
      scrollToBlog();
    }
  );

  function scrollToBlog() {
    const section =
      document.querySelector('.np-blog-posts');

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  showPage(1);
}

function renderBlogPost(post, index) {
  return `
    <article
      class="np-blog-card"
      data-blog-post
      ${index >= POSTS_PER_PAGE ? 'hidden' : ''}
    >
      <div
        class="np-blog-card__media"
        role="img"
        aria-label="Imagen pendiente para ${post.title}"
      >
        <div class="np-blog-card__image-placeholder">
          <span
            class="np-blog-card__image-icon"
            aria-hidden="true"
          >
            ${iconImage()}
          </span>

          <span class="np-blog-card__image-text">
            Imagen pendiente
          </span>
        </div>

        <span class="np-blog-card__category">
          ${post.category}
        </span>
      </div>

      <div class="np-blog-card__content">
        <time class="np-blog-card__date">
          ${post.date}
        </time>

        <h2 class="np-blog-card__title">
          ${post.title}
        </h2>

        <p class="np-blog-card__excerpt">
          ${post.excerpt}
        </p>

        <a
          href="${post.href}"
          class="np-blog-card__link"
        >
          Leer artículo
          ${iconArrowRight()}
        </a>
      </div>
    </article>
  `;
}

function iconImage() {
  return `
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="10"
        width="48"
        height="44"
        rx="5"
        stroke="currentColor"
        stroke-width="2"
      />

      <circle
        cx="23"
        cy="25"
        r="5"
        stroke="currentColor"
        stroke-width="2"
      />

      <path
        d="M13 47l13-13 9 9 7-7 9 11"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

function iconArrowRight() {
  return `
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

function iconChevronLeft() {
  return `
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

function iconChevronRight() {
  return `
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}