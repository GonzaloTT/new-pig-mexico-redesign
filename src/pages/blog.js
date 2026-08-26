import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/utilities.css';
import '../styles/global.css';

import { createHeader } from '../components/header/header.js';
import { createFooter } from '../components/footer/footer.js';
import { createWhatsappFloat } from '../components/whatsapp-float/whatsapp-float.js';

import { initNavigation } from '../scripts/navigation.js';

import { createBlogHero } from '../components/blog/blog-hero/blog-hero.js';
import { createBlogPosts, initBlogPostsPagination } from '../components/blog/blog-posts/blog-posts.js';
import { createBlogCta } from '../components/blog/blog-cta/blog-cta.js';

function renderBlog(root) {
  root.innerHTML = `
    ${createHeader()}

    <main
        class="np-main"
        id="np-main-content"
    >
        ${createBlogHero()}
        ${createBlogPosts()}
        ${createBlogCta()}
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

  renderBlog(root);

  initNavigation();
  initBlogPostsPagination();
}

document.addEventListener(
  'DOMContentLoaded',
  bootstrap
);