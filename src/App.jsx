import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SmoothScroll from './components/SmoothScroll';

const Home = lazy(() => import('./pages/home/Home'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const GalleryPage = lazy(() => import('./pages/gallery/GalleryPage'));
const ContactPage = lazy(() => import('./pages/contact/ContactPage'));
const ProjectsPage = lazy(() => import('./pages/projects/ProjectsPage'));

function PageLoader() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}
    >
      <span
        style={{
          fontFamily: 'Courier New, monospace',
          fontSize: '0.7rem',
          color: '#444',
          letterSpacing: '0.1em',
        }}
      >
        loading...
      </span>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </SmoothScroll>
    </BrowserRouter>
  );
}
