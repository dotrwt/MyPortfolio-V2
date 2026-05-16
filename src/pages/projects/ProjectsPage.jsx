import { motion } from 'framer-motion';
import GridBackground from '../../components/GridBackground';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const clients = ['LOCO', 'STYLUS', 'MODA', 'AURA', 'ECHO'];

const projects = [
  { id: 1, title: 'abc', bg: '#e89e3a', img: 'placeholder1' },
  { id: 2, title: 'ALL FOR ONE', bg: '#f4f4f4', img: 'placeholder2' },
  { id: 3, title: 'H tablet', bg: '#ff0000', img: 'placeholder3' },
  { id: 4, title: 'machine bag', bg: '#2b3658', img: 'placeholder4' },
  { id: 5, title: 'YES box', bg: '#67c5c8', img: 'placeholder5' },
  { id: 6, title: 'business card', bg: '#485827', img: 'placeholder6' },
];

export default function ProjectsPage() {
  return (
    <>
      <GridBackground />
      <Navbar />

      <main id="main-content" style={{ paddingTop: '52px' }}>
        <div className="px-6 md:px-12 xl:px-24 py-16" style={{ borderBottom: '1px solid #1a1a1a' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="font-bold lowercase mb-8"
            style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', letterSpacing: '-0.02em', color: '#fff' }}
          >
            projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="text-white text-xl md:text-2xl mb-16 max-w-2xl font-medium"
            style={{ lineHeight: 1.4, letterSpacing: '-0.01em' }}
          >
            I help startups and series A-D teams to establish a strong connection between their product and customers
          </motion.p>
        </div>

        {/* Client Logos Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-[#1a1a1a]">
          {clients.map((client, i) => (
            <div
              key={client}
              className="py-12 flex items-center justify-center border-[#1a1a1a]"
              style={{ borderRight: i < clients.length - 1 ? '1px solid #1a1a1a' : 'none' }}
            >
              <span className="text-[#333] font-black text-2xl tracking-widest">{client}</span>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="px-6 md:px-12 xl:px-24 py-16 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                className="w-full aspect-square relative overflow-hidden group rounded-sm flex items-center justify-center"
                style={{ backgroundColor: proj.bg }}
              >
                <span className="text-white font-bold opacity-30">{proj.title}</span>

                {/* Meta text */}
                <div className="absolute top-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-mono">Title</span>
                  <span className="text-white text-xs font-mono">2026</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
