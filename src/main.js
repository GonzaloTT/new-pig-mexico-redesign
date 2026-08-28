/**
 * src/main.js
 * Punto de entrada de la aplicación. Importa estilos globales y
 * componentes, renderiza la Home completa dentro de #app respetando
 * el orden visual de las tres imágenes de referencia, e inicializa
 * los scripts de comportamiento (menú móvil y formularios).
 */

// Estilos globales (orden: reset -> variables -> tipografía -> utilidades -> global)
import './styles/reset.css';
import './styles/variables.css';
import './styles/typography.css';
import './styles/utilities.css';
import './styles/global.css';

// Componentes — Imagen 1
import { createHeader } from './components/header/header.js';
import { createHero } from './components/hero/hero.js';
import { createBenefits } from './components/benefits/benefits.js';
import { createCategories } from './components/categories/categories.js';
import { createBrands } from './components/brands/brands.js';

// Componentes — Imagen 2
import { createExpertSearch } from './components/expert-search/expert-search.js';

// Componentes — Imagen 3
import { createCompanyStory } from './components/company-story/company-story.js';
import { createTestimonials } from './components/testimonials/testimonials.js';
import { createFooter } from './components/footer/footer.js';

// Scripts de comportamiento
import { initNavigation } from './scripts/navigation.js';
import { initHeroCarousel } from './scripts/hero-carousel.js';
import { initForms } from './scripts/forms.js';

// Componentes whatsapp-float
import { createWhatsappFloat, initWhatsappFloatAttention } from './components/whatsapp-float/whatsapp-float.js';

function renderHome(root) {
  root.innerHTML = `
    ${createHeader()}
    <main class="np-main" id="np-main-content">
      ${createHero()}
      ${createBenefits()}
      ${createCategories()}
      ${createBrands()}
      ${createExpertSearch()}
      ${createCompanyStory()}
      ${createTestimonials()}
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

  renderHome(root);
  initNavigation();
  initHeroCarousel();
  initForms();
  initWhatsappFloatAttention();
}

document.addEventListener('DOMContentLoaded', bootstrap);
