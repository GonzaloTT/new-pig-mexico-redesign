import './hero.css';

export function createHero() {
  return `
    <section class="np-hero" aria-labelledby="np-hero-title">
      <div class="np-container np-hero__container">
        <div class="np-hero__content">
          <p class="np-hero__eyebrow">
            Soluciones para el control de derrames
          </p>

          <h1 id="np-hero-title" class="np-hero__title">
            Derrames pequeños.
            <span class="np-hero__title-accent">
              Nuestra misión.
            </span>
          </h1>

          <p class="np-hero__description">
            Soluciones confiables para mantener espacios de trabajo
            seguros, limpios y productivos.
          </p>

          <div class="np-hero__actions">
            <a class="np-button np-button--primary" href="#categories">
              Ver productos
            </a>

            <a class="np-button np-button--secondary" href="#expert-search">
              Hablar con un experto
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}