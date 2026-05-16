/**
 * Monospace section label — renders ".label" style text used throughout
 * the original site.
 */
export default function SectionLabel({ children, className = '' }) {
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        fontFamily: 'Courier New, monospace',
        fontSize: '0.7rem',
        color: '#888888',
        letterSpacing: '0.04em',
      }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
