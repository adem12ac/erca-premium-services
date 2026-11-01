export function Brand({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`erca-brand${light ? " erca-brand-light" : ""}`}
      aria-label="ERCA Dienstleistungen"
    >
      <span className="erca-brand-row" aria-hidden="true">
        <span className="erca-stripes">
          <i />
          <i />
          <i />
          <i />
        </span>
        <strong>ERCA</strong>
        <span className="erca-stripes">
          <i />
          <i />
          <i />
          <i />
        </span>
      </span>
      <span className="erca-brand-sub" aria-hidden="true">
        DIENSTLEISTUNGEN
      </span>
    </span>
  );
}
export function BrandWave() {
  return (
    <svg
      className="brand-wave"
      viewBox="0 0 1440 130"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 89 Q760 100 1440 0 V40 Q760 140 0 129Z" fill="#0a326c" />
      <path d="M0 130 Q760 140 1440 53 V130Z" fill="#ce0c32" />
    </svg>
  );
}
