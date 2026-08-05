import './testimonials.css';
import { testimonials } from '../../data/testimonials.js';

/**
 * createTestimonials
 * Sección "Confianza que respalda su operación": título y 3 tarjetas
 * de testimonio con estrellas, cita, autor y cargo.
 *
 * NOTA: Los testimonios provienen de src/data/testimonials.js y son
 * PROVISIONALES / marcadores de posición, no representan clientes reales.
 *
 * Migración futura: sections/np-testimonials.liquid — cada testimonio
 * como section.block tipo "testimonial", o bien como metaobjects
 * "testimonial" referenciados desde la sección.
 */
export function createTestimonials() {
  return `
    <section class="np-testimonials np-section" aria-labelledby="np-testimonials-title">
      <div class="np-container">
        <h2 id="np-testimonials-title" class="np-testimonials__title np-text-center">
          Confianza que respalda su operación
        </h2>

        <p class="np-testimonials__disclaimer">
          Testimonios de ejemplo con fines de presentación visual. Serán reemplazados por
          testimonios reales antes de publicación.
        </p>

        <div class="np-testimonials__grid">
          ${testimonials.map(renderTestimonialCard).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderTestimonialCard(testimonial) {
  return `
    <article class="np-testimonial-card">
      <div class="np-stars" aria-label="Calificación: ${testimonial.rating} de 5 estrellas">
        ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
      </div>
      <p class="np-testimonial-card__quote">&ldquo;${testimonial.quote}&rdquo;</p>
      <footer class="np-testimonial-card__footer">
        <p class="np-testimonial-card__author">${testimonial.author.toUpperCase()}</p>
        ${testimonial.role ? `<p class="np-testimonial-card__role">${testimonial.role.toUpperCase()}</p>` : ''}
      </footer>
    </article>
  `;
}