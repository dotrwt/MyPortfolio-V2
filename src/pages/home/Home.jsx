import GridBackground from '../../components/GridBackground';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import CTA from '../../sections/cta';
import Hero from './Hero';
import AboutSection from './about';
import ProjectSection from './project';
import GallerySection from './gallery';
import './home.css';

export default function Home() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <ProjectSection />
        <GallerySection />
      </main>
      <CTA />
      <Footer />
    </>
  );
}

