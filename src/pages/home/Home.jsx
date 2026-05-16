import GridBackground from '../../components/GridBackground';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import CTA from '../../sections/cta';

export default function Home() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <main id="main-content" className="flex-center" style={{ minHeight: '80vh', flexDirection: 'column' }}>
        <h1 className="text-display" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
          portfolio
        </h1>
        <p className="text-mono" style={{ marginTop: '1rem' }}>
          starting from scratch
        </p>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
