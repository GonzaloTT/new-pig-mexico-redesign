import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/utilities.css';
import '../styles/global.css';

import {
  createHeader
} from '../components/header/header.js';

import {
  createFooter
} from '../components/footer/footer.js';

import {
  createWhatsappFloat,
  initWhatsappFloatAttention
} from '../components/whatsapp-float/whatsapp-float.js';

import {
  createCatalogSidebar
} from '../components/catalog/catalog-sidebar/catalog-sidebar.js';

import {
  createCatalogProducts
} from '../components/catalog/catalog-products/catalog-products.js';

import {
  createCatalogIntro
} from '../components/catalog/catalog-intro/catalog-intro.js';

import {
  createCatalogLayout
} from '../components/catalog/catalog-layout/catalog-layout.js';

import {
  createCatalogBanner
} from '../components/catalog/catalog-banner/catalog-banner.js';

import {
  createCatalogCta
} from '../components/catalog/catalog-cta/catalog-cta.js';

import {
  catalogCategories,
  defaultCatalogCategory,
  getCatalogCategoryBySlug
} from '../data/catalog-categories.js';

import {
  initNavigation
} from '../scripts/navigation.js';

function getCurrentCategory() {
  const params =
    new URLSearchParams(
      window.location.search
    );

  const slug =
    params.get('categoria');

  if (!slug) {
    return defaultCatalogCategory;
  }

  return (
    getCatalogCategoryBySlug(slug) ||
    defaultCatalogCategory
  );
}

function renderCatalog(root) {
  const category =
    getCurrentCategory();

  root.innerHTML = `
    ${createHeader()}

    <main
      class="np-main"
      id="np-main-content"
    >
      ${createCatalogIntro()}

      ${createCatalogLayout(
        createCatalogSidebar(
          catalogCategories,
          category.slug
        ),
        `
          ${createCatalogBanner(category)}
          ${createCatalogProducts(category)}
        `
      )}

      ${createCatalogCta()}
    </main>

    ${createFooter()}
    ${createWhatsappFloat()}
  `;
}

function bootstrap() {
  const root =
    document.getElementById('app');

  if (!root) {
    return;
  }

  renderCatalog(root);

  initNavigation();
  initWhatsappFloatAttention();
}

document.addEventListener(
  'DOMContentLoaded',
  bootstrap
);