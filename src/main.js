import './styles/reset.css';
import './styles/variables.css';
import './styles/typography.css';
import './styles/utilities.css';
import './styles/global.css';

import { createHero } from './components/hero/hero.js';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('No se encontró el elemento #app.');
}

app.innerHTML = `
  <main class="np-home">
    ${createHero()}
  </main>
`;