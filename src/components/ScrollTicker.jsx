import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

/**
 * Horizontal auto-scrolling ticker with duplicated content for seamless loop.
 */
export default function ScrollTicker({ items = [], speed = 30 }) {
  return (
    <div
      className="overflow-hidden w-full"
      aria-hidden="true"
      style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 py-3"
            style={{ fontFamily: 'Courier New, monospace', fontSize: '0.75rem', color: '#888' }}
          >
            <span>{item}</span>
            <span style={{ color: '#333' }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
