import './styles/reset.css';
import './styles/variables.css';
import './styles/typography.css';
import './styles/utilities.css';
import './styles/global.css';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('No se encontró el elemento #app.');
}

app.innerHTML = `
  <main class="np-home">
    <section class="np-section">
      <div class="np-container">
        <h1>New Pig México</h1>
        <p>El entorno base del prototipo funciona correctamente.</p>
      </div>
    </section>
  </main>
`;