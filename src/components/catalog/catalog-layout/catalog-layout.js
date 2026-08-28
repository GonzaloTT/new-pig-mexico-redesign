import './catalog-layout.css';

export function createCatalogLayout(
  sidebar,
  content
) {
  return `
    <section class="np-catalog-layout">
      <div
        class="
          np-container
          np-catalog-layout__container
        "
      >
        <div
          class="np-catalog-layout__sidebar"
        >
          ${sidebar}
        </div>

        <div
          class="np-catalog-layout__content"
        >
          ${content}
        </div>
      </div>
    </section>
  `;
}