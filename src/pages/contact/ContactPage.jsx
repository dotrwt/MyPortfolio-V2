import { motion } from 'framer-motion';
import GridBackground from '../../components/GridBackground';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <>
      <GridBackground />
      <Navbar />

      <main id="main-content" style={{ paddingTop: '52px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 xl:px-24 py-16 gap-16 min-h-[70vh]">

          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              className="font-bold lowercase mb-8"
              style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', letterSpacing: '-0.02em', color: '#fff' }}
            >
              say hello
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="text-white text-xl md:text-2xl mb-12 max-w-md font-medium"
              style={{ lineHeight: 1.4, letterSpacing: '-0.01em' }}
            >
              let's collaborate. feel free to drop me a line about your project or follow me on social networks
            </motion.p>

            <form className="flex flex-col border-t border-b border-[#1a1a1a] mt-auto">
              <div className="flex border-b border-[#1a1a1a]">
                <div className="py-4 px-2 w-32 border-r border-[#1a1a1a] text-[#555] text-sm">Name</div>
                <input type="text" className="bg-transparent text-white px-4 py-4 w-full outline-none" />
              </div>
              <div className="flex border-b border-[#1a1a1a]">
                <div className="py-4 px-2 w-32 border-r border-[#1a1a1a] text-[#555] text-sm">Email</div>
                <input type="email" className="bg-transparent text-white px-4 py-4 w-full outline-none" />
              </div>
              <div className="flex min-h-[120px]">
                <div className="py-4 px-2 w-32 border-r border-[#1a1a1a] text-[#555] text-sm">Message</div>
                <textarea className="bg-transparent text-white px-4 py-4 w-full outline-none resize-none"></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-white text-black py-4 font-semibold hover:bg-gray-200 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center items-start md:items-end">
            <div className="flex flex-col gap-8 md:mt-32">
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-[#333] rounded-md flex items-center justify-center text-white group-hover:border-white transition-colors">
                  <FaXTwitter size={20} />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">twitter</p>
                  <p className="text-[#555] text-xs font-mono">@x1fnoo</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-[#333] rounded-md flex items-center justify-center text-white group-hover:border-white transition-colors">
                  <FaInstagram size={20} />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">instagram</p>
                  <p className="text-[#555] text-xs font-mono">@x1fnoo</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-[#333] rounded-md flex items-center justify-center text-white group-hover:border-white transition-colors">
                  <FaTiktok size={20} />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">tiktok</p>
                  <p className="text-[#555] text-xs font-mono">@x1fnoo</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-[#333] rounded-md flex items-center justify-center text-white group-hover:border-white transition-colors">
                  <FaYoutube size={20} />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">youtube</p>
                  <p className="text-[#555] text-xs font-mono">@x1fnoo</p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
