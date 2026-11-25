// Dev-only style guide. Registered in src/main.tsx only when import.meta.env.DEV is true.
import './Estilos.css';

const colors = [
  { name: 'bg', value: '#F3ECE0' },
  { name: 'surface', value: '#FFFFFF' },
  { name: 'ink', value: '#241B16' },
  { name: 'inkblack', value: '#19120D' },
  { name: 'bordeaux', value: '#5C1A2B' },
  { name: 'gold', value: '#B08D3F' },
  { name: 'muted', value: '#8A7A66' },
  { name: 'glass', value: '#C9B27A' },
];

const scale = ['display', 'h1', 'h2', 'h3', 'lead', 'body', 'small', 'eyebrow'];

const families = [
  { label: 'Picaflor Display (72pt)', varName: '--font-display' },
  { label: 'Picaflor (24pt)', varName: '--font-heading' },
  { label: 'Garamontio', varName: '--font-body' },
];

const weights = [400, 500, 600, 700, 800];

function Estilos() {
  return (
    <div className="container sg">
      <title>Estilos · Bodega Florio</title>

      <header className="sg-section">
        <span className="eyebrow">Design system · dev only</span>
        <h1>Guía de estilos</h1>
      </header>

      <section className="sg-section">
        <h2>Paleta</h2>
        <ul className="sg-swatches">
          {colors.map(({ name, value }) => (
            <li key={name}>
              <span className="sg-swatch" style={{ background: `var(--color-${name})` }} />
              <strong>{name}</strong>
              <code>{value}</code>
            </li>
          ))}
        </ul>
      </section>

      <section className="sg-section">
        <h2>Familias</h2>
        {families.map(({ label, varName }) => (
          <div key={varName} className="sg-family" style={{ fontFamily: `var(${varName})` }}>
            <span className="eyebrow">{label}</span>
            <p style={{ fontSize: 'var(--text-h2)' }}>Bodega Florio — Vinos de Mendoza</p>
          </div>
        ))}
        <div className="sg-family">
          <span className="eyebrow">Garamontio — pesos 400–800 (normal / itálica)</span>
          {weights.map((w) => (
            <p key={w} style={{ fontWeight: w, fontSize: 'var(--text-lead)' }}>
              {w} — Uvas cosechadas a mano <em>desde los viñedos de la familia</em>
            </p>
          ))}
        </div>
      </section>

      <section className="sg-section">
        <h2>Escala tipográfica</h2>
        {scale.map((step) => (
          <div key={step} className="sg-scale-row">
            <code>--text-{step}</code>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: `var(--text-${step})` }}>
              Picaflor
            </span>
            <span style={{ fontSize: `var(--text-${step})` }}>Garamontio</span>
            <span style={{ fontSize: `var(--text-${step})` }}>
              <em>Garamontio itálica</em>
            </span>
          </div>
        ))}
      </section>

      <section className="sg-section">
        <h2>Eyebrow</h2>
        <span className="eyebrow">Enoturismo · Visitas guiadas</span>
        <h3>Recorrido por la bodega</h3>
      </section>

      <section className="sg-section">
        <h2>Botones</h2>
        <div className="sg-buttons sg-buttons--light">
          <a href="#" className="btn-glass btn-glass--on-light">
            Reservar visita
          </a>
          <button type="button" className="btn-glass btn-glass--on-light">
            Ver vinos
          </button>
        </div>
        <div className="sg-buttons sg-buttons--dark">
          <a href="#" className="btn-glass btn-glass--on-dark">
            Reservar visita
          </a>
          <button type="button" className="btn-glass btn-glass--on-dark">
            Ver vinos
          </button>
        </div>
      </section>
    </div>
  );
}

export default Estilos;
