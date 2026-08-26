import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/utilities.css';
import '../styles/global.css';

import { createHeader } from '../components/header/header.js';
import { createFooter } from '../components/footer/footer.js';
import { createWhatsappFloat } from '../components/whatsapp-float/whatsapp-float.js';

import { initNavigation } from '../scripts/navigation.js';

import { createQuoteIntro } from '../components/quote/quote-intro/quote-intro.js';
import { createQuoteBuilder } from '../components/quote/quote-builder/quote-builder.js';
import { createQuoteBenefits } from '../components/quote/quote-benefits/quote-benefits.js';

function renderQuote(root) {
  root.innerHTML = `
    ${createHeader()}

    <main
        class="np-main"
        id="np-main-content"
    >
        ${createQuoteIntro()}
        ${createQuoteBuilder()}
        ${createQuoteBenefits()}
    </main>

    ${createFooter()}
    ${createWhatsappFloat()}
  `;
}

function bootstrap() {
  const root = document.getElementById('app');

  if (!root) {
    return;
  }

  renderQuote(root);
  initNavigation();
}

document.addEventListener(
  'DOMContentLoaded',
  bootstrap
);