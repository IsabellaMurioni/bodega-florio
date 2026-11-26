import { useEffect, useRef, type KeyboardEvent } from 'react';
import type { WineCategory, WineCategoryInfo } from '@/types';
import styles from './CategoryTabs.module.css';
import { PANEL_ID, tabId } from './tabIds';

interface CategoryTabsProps {
  categories: WineCategoryInfo[];
  active: WineCategory;
  onChange: (id: WineCategory) => void;
}

/**
 * Accessible tablist (roving tabindex). Arrow keys, Home and End move between tabs and
 * select them right away (automatic activation).
 */
function CategoryTabs({ categories, active, onChange }: CategoryTabsProps) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // On narrow screens, keep the active tab visible inside the horizontal scroller
  // (scrolls only the bar, never the page).
  useEffect(() => {
    const scroller = scrollerRef.current;
    const tab = refs.current[categories.findIndex((category) => category.id === active)];
    if (!scroller || !tab) return;
    const padding = parseFloat(getComputedStyle(scroller).paddingLeft) || 0;
    // The scroller is position: relative, so offsetLeft is measured from it.
    const left = tab.offsetLeft;
    const right = left + tab.offsetWidth;
    if (left - padding < scroller.scrollLeft) {
      scroller.scrollTo({ left: left - padding });
    } else if (right + padding > scroller.scrollLeft + scroller.clientWidth) {
      scroller.scrollTo({ left: right + padding - scroller.clientWidth });
    }
  }, [active, categories]);

  const select = (index: number) => {
    const category = categories[index];
    if (!category) return;
    onChange(category.id);
    refs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = categories.length - 1;
    const next: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (event.key in next) {
      event.preventDefault();
      select(next[event.key]!);
    }
  };

  return (
    <div className={styles.bar}>
      <div ref={scrollerRef} className={`container ${styles.scroller}`}>
        <div role="tablist" aria-label="Líneas de vinos" className={styles.list}>
          {categories.map(({ id, label }, index) => {
            const selected = id === active;
            return (
              <button
                key={id}
                ref={(el) => {
                  refs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={tabId(id)}
                aria-selected={selected}
                aria-controls={PANEL_ID}
                tabIndex={selected ? 0 : -1}
                className={styles.tab}
                onClick={() => onChange(id)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryTabs;
