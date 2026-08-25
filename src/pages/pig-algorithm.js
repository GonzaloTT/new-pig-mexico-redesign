import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/utilities.css';
import '../styles/global.css';

import { createHeader } from '../components/header/header.js';
import { createFooter } from '../components/footer/footer.js';
import { createWhatsappFloat } from '../components/whatsapp-float/whatsapp-float.js';

import { initNavigation } from '../scripts/navigation.js';

import { createPigAlgorithmHero } from '../components/pig-algorithm/pig-algorithm-hero/pig-algorithm-hero.js';
import { createPigAlgorithmAbout } from '../components/pig-algorithm/pig-algorithm-about/pig-algorithm-about.js';
import { createPigAlgorithmProcess } from '../components/pig-algorithm/pig-algorithm-process/pig-algorithm-process.js';
import { createPigAlgorithmCta } from '../components/pig-algorithm/pig-algorithm-cta/pig-algorithm-cta.js';

function renderPigAlgorithm(root) {
  root.innerHTML = `
    ${createHeader()}

    <main class="np-main" id="np-main-content">
      ${createPigAlgorithmHero()}
      ${createPigAlgorithmAbout()}
      ${createPigAlgorithmProcess()}
      ${createPigAlgorithmCta()}
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
