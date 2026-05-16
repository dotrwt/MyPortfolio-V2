/**
 * Grid Background – 8 fixed vertical lines spanning the full viewport.
 * Positioned behind all content.
 */
export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          style={{
            borderRight: '1px solid #1a1a1a',
            ...(i === 0 ? { borderLeft: '1px solid #1a1a1a' } : {}),
          }}
        />
      ))}
    </div>
  );
}
