import './quote-benefits.css';

/**
 * createQuoteBenefits
 *
 * Bloque informativo que explica las ventajas del proceso
 * de cotización de New Pig México.
 */
export function createQuoteBenefits() {
  const benefits = [
    {
      icon: 'lightning',
      title: 'Cotización rápida',
      description:
        'Optimiza tus tiempos operativos con nuestro sistema automatizado de gestión de solicitudes industriales.'
    },
    {
      icon: 'shield',
      title: 'Sin compromiso',
      description:
        'Consulta precios y especificaciones técnicas sin ninguna obligación de compra inmediata.'
    },
    {
      icon: 'advisor',
      title: 'Asesoría especializada',
      description:
        'Nuestros especialistas revisarán tu solicitud para asegurar el cumplimiento de normativas de seguridad.'
    }
  ];

  return `
    <section
      class="np-quote-benefits np-section"
      aria-label="Beneficios de la cotización"
    >
      <div class="np-container">

        <div class="np-quote-benefits__grid">
          ${benefits
            .map((benefit) => renderBenefit(benefit))
            .join('')}
        </div>

      </div>
    </section>
  `;
}

function renderBenefit(benefit) {
  return `
    <article class="np-quote-benefit">

      <span
        class="np-quote-benefit__icon"
        aria-hidden="true"
      >
        ${getBenefitIcon(benefit.icon)}
      </span>

      <h2 class="np-quote-benefit__title">
        ${benefit.title}
      </h2>

      <p class="np-quote-benefit__description">
        ${benefit.description}
      </p>

    </article>
  `;
}

function getBenefitIcon(name) {
  const icons = {
    lightning: `
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13 2L5 13h6l-1 9 8-12h-6l1-8Z"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `,

    shield: `
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linejoin="round"
        />

        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `,

    advisor: `
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="9"
          cy="8"
          r="3"
          stroke="currentColor"
          stroke-width="1.7"
        />

        <path
          d="M3.5 19c1-3.2 3.2-5 5.5-5s4.5 1.8 5.5 5"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
        />

        <path
          d="M16 9h5M18.5 6.5v5"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
        />
      </svg>
    `
  };

  return icons[name] || '';
}