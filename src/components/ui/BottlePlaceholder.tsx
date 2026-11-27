interface BottlePlaceholderProps {
  /** What the real cutout will be, e.g. the wine name; used as the accessible name. */
  label: string;
  /** Rendered height in px (width follows the 1:3.6 bottle proportion). */
  height?: number;
  /** Silhouette color (default bordeaux-dark). */
  color?: string;
  className?: string;
}

/** Bottle silhouette standing in for the wine cutouts until the real photos arrive. */
function BottlePlaceholder({
  label,
  height = 320,
  color = 'var(--color-bordeaux-dark)',
  className,
}: BottlePlaceholderProps) {
  return (
    <svg
      role="img"
      aria-label={`Botella: ${label}`}
      viewBox="0 0 100 360"
      height={height}
      width={Math.round(height / 3.6)}
      className={className}
    >
      <title>{`Botella: ${label}`}</title>
      {/* Bordeaux-style bottle: capsule, neck, shoulders, body. */}
      <path
        fill={color}
        d="M40 4h20v62c0 10 4 18 12 28 10 12 16 22 16 40v206c0 8-6 14-14 14H26c-8 0-14-6-14-14V134c0-18 6-28 16-40 8-10 12-18 12-28V4z"
      />
      <rect x="38" y="2" width="24" height="46" rx="3" fill={color} opacity="0.85" />
      {/* Label area */}
      <rect x="20" y="196" width="60" height="86" rx="2" fill="var(--color-white)" opacity="0.88" />
      <rect x="32" y="222" width="36" height="3" fill={color} opacity="0.5" />
      <rect x="28" y="232" width="44" height="6" fill={color} opacity="0.7" />
      <rect x="34" y="246" width="32" height="2" fill={color} opacity="0.4" />
    </svg>
  );
}

export default BottlePlaceholder;
