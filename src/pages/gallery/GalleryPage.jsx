import React from 'react';
import GridBackground from '../../components/GridBackground';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import Hero from './hero';
import GalleryGrid from './gallery';
import useSEO from '../../hooks/useSEO';

export default function GalleryPage() {
  useSEO({
    title: 'Visual Gallery',
    description: 'A curation of visual stories, design prototypes, 3D renders, and photography by Harshvardhan Rawat.'
  });

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
