import './whatsapp-float.css';

const FIRST_ATTENTION_DELAY = 15000;
const ATTENTION_INTERVAL = 50000;
const ATTENTION_DURATION = 1600;

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

export function initWhatsappFloatAttention() {
  const whatsappFloat =
    document.querySelector('.np-whatsapp-float');

  if (!whatsappFloat) {
    return;
  }

  const reducedMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

  if (reducedMotion.matches) {
    return;
  }

  let attentionTimeout = null;
  let attentionInterval = null;
  let removeAnimationTimeout = null;

  function canAnimate() {
    return (
      !whatsappFloat.matches(':hover') &&
      !whatsappFloat.matches(':focus-visible')
    );
  }

  function triggerAttention() {
    if (!canAnimate()) {
      return;
    }

    /*
     * Removemos primero la clase para permitir que
     * la animación pueda reiniciarse correctamente.
     */
    whatsappFloat.classList.remove(
      'np-whatsapp-float--attention'
    );

    void whatsappFloat.offsetWidth;

    whatsappFloat.classList.add(
      'np-whatsapp-float--attention'
    );

    window.clearTimeout(
      removeAnimationTimeout
    );

    removeAnimationTimeout =
      window.setTimeout(() => {
        whatsappFloat.classList.remove(
          'np-whatsapp-float--attention'
        );
      }, ATTENTION_DURATION);
  }

  function startAttentionCycle() {
    stopAttentionCycle();

    attentionTimeout =
      window.setTimeout(() => {
        triggerAttention();

        attentionInterval =
          window.setInterval(
            triggerAttention,
            ATTENTION_INTERVAL
          );
      }, FIRST_ATTENTION_DELAY);
  }

  function stopAttentionCycle() {
    if (attentionTimeout) {
      window.clearTimeout(
        attentionTimeout
      );

      attentionTimeout = null;
    }

    if (attentionInterval) {
      window.clearInterval(
        attentionInterval
      );

      attentionInterval = null;
    }
  }

  function handleVisibilityChange() {
    if (document.hidden) {
      stopAttentionCycle();
    } else {
      startAttentionCycle();
    }
  }

  document.addEventListener(
    'visibilitychange',
    handleVisibilityChange
  );

  reducedMotion.addEventListener(
    'change',
    (event) => {
      if (event.matches) {
        stopAttentionCycle();

        whatsappFloat.classList.remove(
          'np-whatsapp-float--attention'
        );
      } else {
        startAttentionCycle();
      }
    }
  );

  startAttentionCycle();
}

function iconWhatsapp() {
  return `
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3.2
          a8.2 8.2 0 0 0-7.05 12.38
          L3.8 20.2
          l4.72-1.18
          A8.2 8.2 0 1 0 12 3.2Z"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        d="M8.4 8.1
          c.25-.45.55-.47.85-.47
          h.35
          c.2 0 .4.05.52.38
          l.82 1.95
          c.1.25.07.47-.1.68
          l-.67.8
          c-.15.18-.18.35-.07.55
          c.52.9 1.27 1.65 2.18 2.17
          c.2.12.38.08.55-.07
          l.8-.68
          c.2-.17.43-.2.68-.1
          l1.94.82
          c.33.13.38.32.38.53
          v.35
          c0 .3-.02.6-.47.85
          c-.52.3-1.45.52-2.3.32
          c-1.45-.33-2.98-1.18-4.25-2.45
          c-1.28-1.28-2.12-2.8-2.45-4.25
          c-.2-.85.02-1.78.32-2.3Z"
        fill="currentColor"
      />
    </svg>
  `;
}