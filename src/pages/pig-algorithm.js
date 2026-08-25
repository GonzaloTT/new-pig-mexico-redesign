import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/utilities.css';
import '../styles/global.css';

import { createHeader } from '../components/header/header.js';
import { createFooter } from '../components/footer/footer.js';
import { createWhatsappFloat } from '../components/whatsapp-float/whatsapp-float.js';

import { initNavigation } from '../scripts/navigation.js';

function renderPigAlgorithm(root) {
  root.innerHTML = `
    ${createHeader()}

    <main class="np-main" id="np-main-content">
      <section class="np-section">
        <div class="np-container">
          <h1>Algoritmo PIG</h1>

          <p>
            Página en construcción.
          </p>
        </div>
      </section>
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

  renderPigAlgorithm(root);
  initNavigation();
}

document.addEventListener('DOMContentLoaded', bootstrap);
