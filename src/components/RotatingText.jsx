import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  'software interfaces',
  'digital stories',
  'cinematic web apps',
  'immersive experiences',
  'pixel-perfect products',
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden" style={{ minHeight: '1.1em' }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="block"
          style={{ color: '#888888' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
