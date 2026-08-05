/**
 * src/scripts/forms.js
 * Comportamiento de formularios de prototipo:
 * - Buscador de "Consultar experto" (expert-search)
 * - Chips de sugerencias de búsqueda
 * - Newsletter del footer
 *
 * Ninguno de estos formularios envía datos reales. Solo previenen el
 * submit por defecto y muestran un mensaje visual accesible
 * (aria-live) dentro de la página. No se usa alert() ni console.log().
 */

const MESSAGE_TIMEOUT_MS = 4000;

export function initForms() {
  initExpertSearchForm();
  initNewsletterForm();
}

function showMessage(messageEl) {
  if (!messageEl) return;

  messageEl.dataset.state = 'visible';

  window.clearTimeout(showMessage._timeoutId);
  showMessage._timeoutId = window.setTimeout(() => {
    messageEl.dataset.state = 'hidden';
  }, MESSAGE_TIMEOUT_MS);
}

function initExpertSearchForm() {
  const form = document.getElementById('np-expert-search-form');
  if (!form) return;

  const input = document.getElementById('np-expert-search-input');
  const messageEl = document.getElementById('np-expert-search-message');
  const chips = form.querySelectorAll('.np-chip');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showMessage(messageEl);
  });

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const value = chip.dataset.chipValue || '';
      if (input) {
        input.value = value;
        input.focus();
      }
    });
  });
}

function initNewsletterForm() {
  const form = document.getElementById('np-newsletter-form');
  if (!form) return;

  const messageEl = document.getElementById('np-newsletter-message');
  const emailInput = document.getElementById('np-newsletter-email');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showMessage(messageEl);
    if (emailInput) {
      emailInput.value = '';
    }
  });
}