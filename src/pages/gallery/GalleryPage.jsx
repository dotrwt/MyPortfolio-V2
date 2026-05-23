import React from 'react';
import GridBackground from '../../components/GridBackground';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import Hero from './hero';
import GalleryGrid from './gallery';

export default function GalleryPage() {
  return (
    <>
      <GridBackground />
      <Navbar />

      <main id="gallery-page">
        <Hero />
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
