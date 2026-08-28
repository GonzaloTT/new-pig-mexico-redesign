import './catalog-cta.css';

const BASE_URL = import.meta.env.BASE_URL;

export function createCatalogCta() {
  return `
    <section
      class="np-catalog-cta"
      aria-labelledby="catalog-cta-title"
    >
      <div class="np-container">
        <div class="np-catalog-cta__content">
          <h2
            class="np-catalog-cta__title"
            id="catalog-cta-title"
          >
            ¿No encuentras lo que buscas?
          </h2>

          <p class="np-catalog-cta__description">
            Nuestro equipo de especialistas puede ayudarte
            a encontrar la solución adecuada para tu operación,
            tipo de derrame y necesidades de seguridad industrial.
          </p>

          <div class="np-catalog-cta__actions">
            <a
              href="https://wa.me/52442337055?text=Hola%2C%20necesito%20asesor%C3%ADa%20para%20encontrar%20un%20producto%20de%20New%20Pig%20M%C3%A9xico."
              class="
                np-catalog-cta__button
                np-catalog-cta__button--primary
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar a un asesor
            </a>

            <a
              href="${BASE_URL}cotizador/"
              class="
                np-catalog-cta__button
                np-catalog-cta__button--secondary
              "
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}