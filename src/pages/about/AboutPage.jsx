import React from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import AboutHero from './hero';
import Stats from './stats';
import AboutSection from './about';
import Experience from './experience';
import Stack from './stack';
import CTA from '../../sections/cta';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main id="about-page">
        <AboutHero />
        <Stats />
        <AboutSection />
        <Experience />
        <Stack />
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default AboutPage;
