import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import GridBackground from '../../components/GridBackground';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Gallery items - using placeholder gradient images
const galleryItems = [
  { id: 1, title: 'Nopal Studio', desc: 'Designing the future of sustainable agriculture', span: 'tall', gradient: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)' },
  { id: 2, title: 'Tierra Viva', desc: 'Breathing new life into an organic market', span: 'short', gradient: 'linear-gradient(135deg, #111 0%, #222 100%)' },
  { id: 3, title: 'Casa Nomad', desc: 'Weaving artisan stories into a global brand', span: 'tall', gradient: 'linear-gradient(135deg, #1a0a00 0%, #2d1500 100%)' },
  { id: 4, title: 'Alba Retreat', desc: 'Crafting a sanctuary of minimalism and nature', span: 'short', gradient: 'linear-gradient(135deg, #0a1000 0%, #151f00 100%)' },
  { id: 5, title: 'Lumina Labs', desc: 'Illuminating the path to clean energy', span: 'tall', gradient: 'linear-gradient(135deg, #000814 0%, #001233 100%)' },
  { id: 6, title: 'Forma Studio', desc: 'Shape-driven identity for a product design firm', span: 'short', gradient: 'linear-gradient(135deg, #0d0d0d 0%, #2a2a2a 100%)' },
  { id: 7, title: 'Helio Drinks', desc: 'Sun-kissed branding for a cold-press juice bar', span: 'short', gradient: 'linear-gradient(135deg, #1a0800 0%, #331500 100%)' },
  { id: 8, title: 'Vertex AI', desc: 'Enterprise identity for a machine learning platform', span: 'tall', gradient: 'linear-gradient(135deg, #010014 0%, #0a0033 100%)' },
];

function GalleryItem({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-sm cursor-pointer"
      style={{
        background: item.gradient,
        aspectRatio: item.span === 'tall' ? '3/4' : '4/3',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.35 }}
    >
      {/* Decorative pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          color: 'rgba(255,255,255,0.04)',
          fontWeight: 900,
        }}
      >
        {item.title.charAt(0)}
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.25 }}
        style={{ padding: '1rem' }}
      >
        <div
          className="flex items-center gap-2 text-white rounded-full px-5 py-2.5"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)',
            fontSize: '0.8rem',
            fontWeight: 500,
          }}
        >
          View Casestudy
          <ArrowUpRight size={14} />
        </div>
      </motion.div>

      {/* Caption on hover */}
      <motion.div
        className="absolute top-3 left-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-white font-semibold text-xs">{item.title}</p>
        <p className="text-white/50 text-xs">{item.desc}</p>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <GridBackground />
      <Navbar />

      <main id="main-content" style={{ paddingTop: '52px' }}>
        {/* Header */}
        <div
          className="px-6 md:px-12 xl:px-24 py-16"
          style={{ borderBottom: '1px solid #1a1a1a' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="font-bold lowercase mb-8"
            style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', letterSpacing: '-0.02em', color: '#fff' }}
          >
            Gallery
          </motion.h1>
        </div>

        {/* Masonry-style 3-column grid */}
        <div
          className="px-6 md:px-12 xl:px-24 py-12"
        >
          <div
            className="columns-1 sm:columns-2 lg:columns-3 gap-4"
            style={{ columnGap: '1rem' }}
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                style={{ marginBottom: '1rem', breakInside: 'avoid' }}
              >
                <GalleryItem item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
