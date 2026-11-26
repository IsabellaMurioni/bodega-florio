import { metrics } from '@/data/home';
import { useCountUp } from '@/hooks/useCountUp';
import { useReveal } from '@/hooks/useReveal';
import type { Metric } from '@/types';
import styles from './MetricsBand.module.css';

// Spanish style: no separator for 4-digit numbers (so 1912 stays 1912), dot from 5 digits up.
const formatNumber = (value: number) =>
  value >= 10000 ? value.toLocaleString('es-AR') : String(value);

function MetricItem({ metric, run }: { metric: Metric; run: boolean }) {
  const current = useCountUp(metric.value, run);

  return (
    <li className={styles.item}>
      <span className={styles.value} aria-hidden="true">
        {formatNumber(current)}
        {metric.suffix}
      </span>
      <span className="visually-hidden">
        {formatNumber(metric.value)}
        {metric.suffix}
      </span>
      <span className={styles.label}>{metric.label}</span>
      <span className={styles.bar} aria-hidden="true">
        <span className={run ? `${styles.fill} ${styles.filled}` : styles.fill} />
      </span>
      {metric.isSample && <span className={styles.note}>Cifra de ejemplo, a confirmar</span>}
    </li>
  );
}

function MetricsBand() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className={styles.band} aria-label="Florio en números">
      <ul className={`container ${styles.list}`}>
        {metrics.map((metric) => (
          <MetricItem key={metric.label} metric={metric} run={visible} />
        ))}
      </ul>
    </section>
  );
}

export default MetricsBand;
