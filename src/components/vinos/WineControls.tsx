import { useEffect, useRef, useState } from 'react';
import { wineCategories } from '@/data/wineCategories';
import type { WineCategory } from '@/types';
import styles from './WineControls.module.css';

export type WineView = 'slider' | 'grilla';

interface WineControlsProps {
  line: WineCategory | null;
  view: WineView;
  onLineChange: (line: WineCategory | null) => void;
  onViewChange: (view: WineView) => void;
}

function SliderIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="8" y="4" width="8" height="16" rx="1" />
      <path d="M4 7v10M20 7v10" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="4" y="4" width="7" height="7" />
      <rect x="13" y="4" width="7" height="7" />
      <rect x="4" y="13" width="7" height="7" />
      <rect x="13" y="13" width="7" height="7" />
    </svg>
  );
}

/** Line filter dropdown ("Línea: Todas ▾") and slider/grid view toggle. */
function WineControls({ line, view, onLineChange, onViewChange }: WineControlsProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = wineCategories.find((category) => category.id === line)?.label ?? 'Todas';

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = (value: WineCategory | null) => {
    onLineChange(value);
    setOpen(false);
  };

  return (
    <div className={styles.controls}>
      <div ref={ref} className={styles.filter}>
        <button
          type="button"
          className={styles.filterButton}
          aria-expanded={open}
          aria-controls="filtro-linea"
          onClick={() => setOpen((value) => !value)}
        >
          Línea: {current} <span aria-hidden="true">▾</span>
        </button>
        <ul id="filtro-linea" className={styles.menu} hidden={!open}>
          {[{ id: null, label: 'Todas' }, ...wineCategories].map(({ id, label }) => (
            <li key={label}>
              <button
                type="button"
                aria-pressed={line === id}
                className={line === id ? `${styles.option} ${styles.selected}` : styles.option}
                onClick={() => choose(id as WineCategory | null)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.toggle} role="group" aria-label="Vista">
        <button
          type="button"
          aria-label="Vista slider"
          aria-pressed={view === 'slider'}
          className={view === 'slider' ? `${styles.view} ${styles.selected}` : styles.view}
          onClick={() => onViewChange('slider')}
        >
          <SliderIcon />
        </button>
        <button
          type="button"
          aria-label="Vista grilla"
          aria-pressed={view === 'grilla'}
          className={view === 'grilla' ? `${styles.view} ${styles.selected}` : styles.view}
          onClick={() => onViewChange('grilla')}
        >
          <GridIcon />
        </button>
      </div>
    </div>
  );
}

export default WineControls;
