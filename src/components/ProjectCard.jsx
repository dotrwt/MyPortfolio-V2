import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  const {
    year,
    category,
    name,
    textColor = '#ffffff',
    accentColor,
    image,
    url = '#',
  } = project;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full h-full flex flex-col justify-between"
      style={{
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`View project: ${name}`}
    >
      {/* Top metadata row */}
      <div
        className="flex items-center justify-between px-6 md:px-12 xl:px-24 py-6"
        style={{ borderBottom: `1px solid ${textColor}22` }}
      >
        <span
          className="mono-label tracking-widest uppercase"
          style={{ fontFamily: 'Courier New, monospace', fontSize: '0.75rem', color: accentColor || textColor, opacity: 0.9 }}
        >
          {year}
        </span>
        <span
          className="mono-label tracking-widest uppercase"
          style={{ fontFamily: 'Courier New, monospace', fontSize: '0.75rem', color: accentColor || textColor, opacity: 0.9 }}
        >
          {category}
        </span>
      </div>

      {/* Center content (Image/Name) */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full h-full">
        {/* Abstract floating image or element could go here */}
        <motion.div
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="relative z-10"
        >
           <h3
            className="font-bold lowercase text-center px-4"
            style={{
              color: accentColor || textColor,
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              lineHeight: 0.85,
              letterSpacing: '-0.03em',
            }}
          >
            {name}
          </h3>
        </motion.div>
      </div>

      {/* Bottom row (if needed, or just padding) */}
      <div className="flex items-center justify-center py-8">
         <motion.div
            animate={{ x: hovered ? 10 : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ color: accentColor || textColor }}
          >
            <ArrowRight size={48} strokeWidth={1} />
          </motion.div>
      </div>
    </motion.a>
  );
}
