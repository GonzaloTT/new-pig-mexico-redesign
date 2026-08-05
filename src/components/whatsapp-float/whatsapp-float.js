import './whatsapp-float.css';

export function createWhatsappFloat() {
  const phone = '52442337055';
  const message = encodeURIComponent(
    'Hola, necesito asesoría sobre las soluciones de New Pig México.'
  );

  return `
    <a
      class="np-whatsapp-float"
       href="https://wa.me/${phone}?text=${message}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a New Pig México por WhatsApp"
    >
      <span class="np-whatsapp-float__icon" aria-hidden="true">
        ${iconWhatsapp()}
      </span>

      <span class="np-whatsapp-float__content">
        <strong class="np-whatsapp-float__title">
          ¿Necesitas ayuda?
        </strong>

        <span class="np-whatsapp-float__text">
          Escríbenos por WhatsApp
        </span>
      </span>
    </a>
  `;
}

function iconWhatsapp() {
  return `
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 12a8 8 0 1 1-3.7-6.8L20 4l-1.2 3.7A8 8 0 0 1 20 12z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M9 9.5c0 3 2.5 5.5 5.5 5.5.3 0 .6 0 .8-.1"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  `;
}
