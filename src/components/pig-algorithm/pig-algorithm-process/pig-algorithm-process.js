import './pig-algorithm-process.css';

const processSteps = [
  {
    step: '01',
    title: 'Evaluación gratuita',
    description:
      'Iniciamos conociendo a fondo tu operación, instalaciones y procesos actuales.',
    icon: 'clipboard'
  },
  {
    step: '02',
    title: 'Diagnóstico',
    description:
      'Analizamos riesgos críticos, puntos vulnerables y áreas de oportunidad en sitio.',
    icon: 'search'
  },
  {
    step: '03',
    title: 'Reporte',
    description:
      'Entregamos un análisis detallado con los hallazgos y prioridades detectadas.',
    icon: 'document'
  },
  {
    step: '04',
    title: 'Recomendaciones',
    description:
      'Proponemos soluciones técnicas específicas para cada riesgo identificado.',
    icon: 'idea'
  },
  {
    step: '05',
    title: 'Implementación',
    description:
      'Acompañamos la aplicación de soluciones, capacitación y seguimiento de resultados.',
    icon: 'rocket',
    featured: true
  }
];

export function createPigAlgorithmProcess() {
  return `
    <section
      id="pig-algorithm-process"
      class="np-pig-process np-section"
      aria-labelledby="np-pig-process-title"
    >
      <div class="np-container">

        <div class="np-pig-process__header">
          <h2
            id="np-pig-process-title"
            class="np-pig-process__title"
          >
            ¿Cómo funciona?
          </h2>

          <p class="np-pig-process__description">
            Un proceso estructurado para llevar la seguridad industrial
            de tu operación al siguiente nivel.
          </p>
        </div>

        <div class="np-pig-process__steps">
          ${processSteps.map(renderProcessStep).join('')}
        </div>

      </div>
    </section>
  `;
}

function renderProcessStep(step, index) {
  return `
    <article
      class="
        np-pig-process__step
        ${step.featured ? 'np-pig-process__step--featured' : ''}
      "
    >
      <div
        class="np-pig-process__icon"
        aria-hidden="true"
      >
        ${getProcessIcon(step.icon)}
      </div>

      <p class="np-pig-process__step-number">
        Paso ${step.step}
      </p>

      <h3 class="np-pig-process__step-title">
        ${step.title}
      </h3>

      <p class="np-pig-process__step-description">
        ${step.description}
      </p>

      ${
        index < processSteps.length - 1
          ? '<span class="np-pig-process__connector" aria-hidden="true"></span>'
          : ''
      }
    </article>
  `;
}

function getProcessIcon(name) {
  const icons = {
    clipboard: `
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          x="6"
          y="5"
          width="12"
          height="15"
          rx="2"
          stroke="currentColor"
          stroke-width="1.7"
        />

        <path
          d="M9 5V3.8h6V5M9 10h6M9 14h6"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
        />
      </svg>
    `,

    search: `
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="10.5"
          cy="10.5"
          r="5.5"
          stroke="currentColor"
          stroke-width="1.8"
        />

        <path
          d="M15 15l5 5"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        />

        <path
          d="M8.5 10.5h4M10.5 8.5v4"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    `,

    document: `
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7 3h7l4 4v14H7z"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linejoin="round"
        />

        <path
          d="M14 3v5h4M10 13h5M10 17h5"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
        />
      </svg>
    `,

    idea: `
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 18h6M10 21h4"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
        />

        <path
          d="M8.2 14.5C6.8 13.4 6 11.8 6 10a6 6 0 1 1 12 0c0 1.8-.8 3.4-2.2 4.5-.8.6-1.3 1.4-1.4 2.3h-4.8c-.1-.9-.6-1.7-1.4-2.3Z"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linejoin="round"
        />
      </svg>
    `,

    rocket: `
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14 4c3-1 5-1 6-1 0 1 0 3-1 6l-5 5-4-4 4-6Z"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linejoin="round"
        />

        <circle
          cx="16"
          cy="7"
          r="1.5"
          stroke="currentColor"
          stroke-width="1.5"
        />

        <path
          d="M10 10l-4 1-2 3 5 1M14 14l-1 4-3 2-1-5"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linejoin="round"
        />
      </svg>
    `
  };

  return icons[name] || '';
}
