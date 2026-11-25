// Dev-only style guide. Registered in src/main.tsx only when import.meta.env.DEV is true.
import Button from '@/components/ui/Button';
import ImagePlaceholder, { type PlaceholderTone } from '@/components/ui/ImagePlaceholder';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CartIcon from '@/components/ui/icons/CartIcon';
import MenuIcon from '@/components/ui/icons/MenuIcon';
import WhatsAppIcon from '@/components/ui/icons/WhatsAppIcon';
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

const placeholders: { tone: PlaceholderTone; label: string }[] = [
  { tone: 'vineyard', label: 'Viñedo con la Cordillera' },
  { tone: 'bordeaux', label: 'Copa de Malbec' },
  { tone: 'gold', label: 'Barricas en la cava' },
  { tone: 'stone', label: 'Fachada de la bodega' },
];

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

      <section className="sg-section">
        <h2>Componentes · Button</h2>
        <div className="sg-buttons sg-buttons--light">
          <Button to="/reservas">Reservar (Link interno)</Button>
          <Button href="https://bodegaflorio.mitiendanube.com/">Tienda (externo)</Button>
          <Button onClick={() => alert('click')}>Button</Button>
        </div>
        <div className="sg-buttons sg-buttons--dark">
          <Button to="/vinos" tone="onDark">
            Ver vinos
          </Button>
          <Button tone="onDark">Button</Button>
        </div>
      </section>

      <section className="sg-section">
        <h2>Componentes · SectionHeading</h2>
        <SectionHeading
          eyebrow="Enoturismo"
          title="Una tarde entre viñedos"
          intro="Recorré la bodega, caminá entre las hileras y terminá con una degustación guiada."
        />
        <SectionHeading eyebrow="Nuestros vinos" title="Centrado" align="center" />
      </section>

      <section className="sg-section">
        <h2>Componentes · ImagePlaceholder</h2>
        <div className="sg-placeholders">
          {placeholders.map(({ tone, label }) => (
            <ImagePlaceholder key={tone} tone={tone} label={label} ratio="4 / 5" />
          ))}
        </div>
      </section>

      <section className="sg-section">
        <h2>Componentes · Icons</h2>
        <div className="sg-icons">
          <CartIcon />
          <WhatsAppIcon />
          <MenuIcon />
          <CartIcon size={32} title="Carrito" />
        </div>
      </section>

      <section className="sg-section">
        <h2>Componentes · Reveal</h2>
        <div className="sg-placeholders">
          {[0, 120, 240, 360].map((delay) => (
            <Reveal key={delay} delay={delay}>
              <div className="sg-reveal-card">delay {delay}ms</div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Estilos;
