// Dev-only style guide (R0 design base). Registered in src/main.tsx only when import.meta.env.DEV is true.
import { useState } from 'react';
import logoNav from '@/assets/brand/logo-nav.png';
import logoWhite from '@/assets/brand/logo-white.png';
import BottlePlaceholder from '@/components/ui/BottlePlaceholder';
import Button from '@/components/ui/Button';
import DisplayTitle, { type DisplaySize } from '@/components/ui/DisplayTitle';
import Eyebrow from '@/components/ui/Eyebrow';
import IconButton from '@/components/ui/IconButton';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Pill from '@/components/ui/Pill';
import RevealText from '@/components/ui/RevealText';
import './Estilos.css';

const colors = [
  { name: 'bordeaux', value: '#6F0025' },
  { name: 'bordeaux-dark', value: '#360606' },
  { name: 'gold', value: '#DDB972', note: 'solo sobre oscuro' },
  { name: 'white', value: '#FFFFFF' },
  { name: 'ink', value: '#000000' },
  { name: 'rule', value: 'rgba(0,0,0,.15)' },
  { name: 'band', value: '#F4E7EA', note: 'provisorio' },
];

const displaySizes: { size: DisplaySize; label: string }[] = [
  { size: 'xl', label: 'xl · clamp(64px, 13vw, 192px)' },
  { size: 'l', label: 'l · clamp(56px, 9vw, 128px)' },
  { size: 'm', label: 'm · clamp(40px, 6.5vw, 96px)' },
  { size: 's', label: 's · 40px' },
  { size: 'card', label: 'card · 24px' },
];

const motion = [
  { name: '--ease-curtain', value: 'cubic-bezier(0.68, 0.09, 0, 0.97)' },
  { name: '--ease-ui', value: 'cubic-bezier(0.25, 0.1, 0.25, 1)' },
  { name: '--dur-ui', value: '0.6s' },
  { name: '--dur-base', value: '1s' },
  { name: '--dur-long', value: '1.6s' },
];

const filters = ['Todos', 'Generosos', 'Espumante', 'Tintos', 'Dulces naturales'];

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Close() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

function GrapeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="7" r="3" />
      <circle cx="8" cy="13" r="3" />
      <circle cx="16" cy="13" r="3" />
      <circle cx="12" cy="19" r="3" />
    </svg>
  );
}

function Estilos() {
  const [filter, setFilter] = useState('Todos');
  const [view, setView] = useState<'slider' | 'grid'>('slider');
  const [replay, setReplay] = useState(0);

  return (
    <div className="sg">
      <title>Estilos | Bodega Florio</title>

      <header className="sg-section">
        <Eyebrow>Design system · R0 · dev only</Eyebrow>
        <DisplayTitle as="h1" size="l">
          Guía de estilos
        </DisplayTitle>
      </header>

      <section className="sg-section">
        <h2 className="sg-h">Colores</h2>
        <ul className="sg-swatches">
          {colors.map(({ name, value, note }) => (
            <li key={name}>
              <span className="sg-swatch" style={{ background: `var(--color-${name})` }} />
              <strong>{name}</strong>
              <code>{value}</code>
              {note && <small>{note}</small>}
            </li>
          ))}
        </ul>
      </section>

      <section className="sg-section">
        <h2 className="sg-h">Display · Krylon, mayúsculas, line-height 1</h2>
        {displaySizes.map(({ size, label }) => (
          <div key={size} className="sg-type-row">
            <code>{label}</code>
            <DisplayTitle as="p" size={size}>
              Bodega Florio
            </DisplayTitle>
          </div>
        ))}
      </section>

      <section className="sg-section">
        <h2 className="sg-h">Texto · Neutral Sans</h2>
        <div className="sg-type-row">
          <code>lead · 20px / 1.4</code>
          <p style={{ fontSize: 'var(--body-lead)', maxWidth: '40rem' }}>
            Desde 1912 elaboramos vinos en Maipú, Mendoza: generosos, espumantes, tintos y dulces
            naturales de la familia Florio.
          </p>
        </div>
        <div className="sg-type-row">
          <code>body · 16px / 1.4</code>
          <p style={{ maxWidth: '40rem' }}>
            Texto provisorio para ver el cuerpo de lectura. Uvas cosechadas a mano, crianza en roble
            y una tradición que pasa de generación en generación.
          </p>
        </div>
        <div className="sg-type-row">
          <code>label · 10-12px, 0.2em</code>
          <Eyebrow>Generosos · Mistela</Eyebrow>
        </div>
        <div className="sg-type-row">
          <code>pesos 400-900</code>
          <div className="sg-weights">
            {[400, 500, 600, 700, 800, 900].map((w) => (
              <span key={w} style={{ fontWeight: w }}>
                {w} Florio
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section">
        <h2 className="sg-h">Grilla de 24 columnas · sm / md / lg</h2>
        <div className="grid-24 sg-grid">
          {Array.from({ length: 24 }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className="sg-spaces">
          <div style={{ width: 'var(--space-sm)' }}>sm 4.17vw</div>
          <div style={{ width: 'var(--space-md)' }}>md 8.33vw</div>
          <div style={{ width: 'var(--space-lg)' }}>lg 12.5vw</div>
        </div>
      </section>

      <section className="sg-section">
        <h2 className="sg-h">Motion</h2>
        <ul className="sg-motion">
          {motion.map(({ name, value }) => (
            <li key={name}>
              <code>{name}</code> {value}
            </li>
          ))}
        </ul>
        <p className="sg-note">Pasá el mouse por las barras: misma distancia, curtain vs ui.</p>
        <div className="sg-ease">
          <span className="sg-ease-bar" style={{ transitionTimingFunction: 'var(--ease-curtain)' }}>
            curtain · 1s
          </span>
          <span className="sg-ease-bar" style={{ transitionTimingFunction: 'var(--ease-ui)' }}>
            ui · 1s
          </span>
        </div>
      </section>

      <section className="sg-section">
        <h2 className="sg-h">Button</h2>
        <div className="sg-row sg-light">
          <Button to="/reservas">Reservar visita</Button>
          <Button variant="outline" href="https://bodegaflorio.mitiendanube.com/">
            Tienda online
          </Button>
          <Button variant="outline" onClick={() => setReplay((n) => n + 1)}>
            Button
          </Button>
        </div>
        <div className="sg-row sg-dark">
          <Button variant="white" to="/reservas">
            Reservar visita
          </Button>
          <Button to="/vinos">Ver vinos</Button>
          <Button variant="outline" href="https://bodegaflorio.mitiendanube.com/">
            Tienda online
          </Button>
        </div>
      </section>

      <section className="sg-section">
        <h2 className="sg-h">IconButton · 60px</h2>
        <div className="sg-row sg-light">
          <IconButton label="Anterior" variant="dark">
            <Arrow flip />
          </IconButton>
          <IconButton label="Siguiente" variant="dark">
            <Arrow />
          </IconButton>
          <IconButton label="Cerrar" variant="outline">
            <Close />
          </IconButton>
          <IconButton label="Siguiente" variant="outline" disabled>
            <Arrow />
          </IconButton>
        </div>
        <div className="sg-row sg-dark">
          <IconButton label="Anterior">
            <Arrow flip />
          </IconButton>
          <IconButton label="Siguiente">
            <Arrow />
          </IconButton>
          <IconButton label="Cerrar" variant="outline">
            <Close />
          </IconButton>
        </div>
      </section>

      <section className="sg-section">
        <h2 className="sg-h">Pill · filtro y toggle</h2>
        <div className="sg-row" role="group" aria-label="Filtrar por línea">
          {filters.map((f) => (
            <Pill key={f} active={filter === f} onClick={() => setFilter(f)}>
              {f}
            </Pill>
          ))}
        </div>
        <div className="sg-row" role="group" aria-label="Vista">
          <Pill active={view === 'slider'} onClick={() => setView('slider')}>
            Slider
          </Pill>
          <Pill active={view === 'grid'} onClick={() => setView('grid')}>
            Grilla
          </Pill>
          <Pill icon={<GrapeIcon />}>Línea: Generosos</Pill>
        </div>
      </section>

      <section className="sg-section">
        <h2 className="sg-h">Eyebrow + DisplayTitle</h2>
        <div className="sg-heading">
          <Eyebrow>Desde 1912</Eyebrow>
          <DisplayTitle size="m">Una bodega para descubrir</DisplayTitle>
        </div>
        <div className="sg-heading sg-dark sg-pad">
          <Eyebrow className="sg-gold">Enoturismo</Eyebrow>
          <DisplayTitle size="m">Visitas guiadas</DisplayTitle>
        </div>
      </section>

      <section className="sg-section">
        <h2 className="sg-h">RevealText · máscara por línea</h2>
        <div>
          <Button variant="outline" onClick={() => setReplay((n) => n + 1)}>
            Repetir
          </Button>
        </div>
        <RevealText
          key={replay}
          as="p"
          className="sg-reveal"
          lines={['La tierra', 'que hizo', 'el vino']}
        />
      </section>

      <section className="sg-section">
        <h2 className="sg-h">Provisorios</h2>
        <div className="sg-placeholders">
          <ImagePlaceholder label="Viñedo con la Cordillera" ratio="4 / 5" />
          <ImagePlaceholder label="Barricas en la cava" ratio="1 / 1" />
          <ImagePlaceholder label="Fachada de la bodega" ratio="16 / 9" />
          <div className="sg-bottles">
            <BottlePlaceholder label="Mistela" height={260} />
            <BottlePlaceholder label="Marsala" height={200} color="var(--color-bordeaux)" />
          </div>
        </div>
      </section>

      <section className="sg-section">
        <h2 className="sg-h">Logo</h2>
        <div className="sg-row sg-light">
          <img src={logoNav} alt="Bodega Florio (bordó)" style={{ height: 48, width: 'auto' }} />
        </div>
        <div className="sg-row sg-dark">
          <img src={logoWhite} alt="Bodega Florio (blanco)" style={{ height: 48, width: 'auto' }} />
          <img src="/icon-512.png" alt="Favicon" style={{ height: 48, width: 48 }} />
        </div>
      </section>
    </div>
  );
}

export default Estilos;
