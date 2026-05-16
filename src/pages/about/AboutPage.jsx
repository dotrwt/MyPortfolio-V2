import React from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import AboutHero from './hero';
import Stats from './stats';
import AboutSection from './about';
import Experience from './experience';
import Stack from './stack';
import CTA from '../../sections/cta';
import GridBackground from '../../components/GridBackground';

const AboutPage = () => {
  return (
    <>
      <GridBackground />
      <Navbar />
      <main id="about-page">
        <AboutHero />
        <Stats />
        <AboutSection />
        <Experience />
        <Stack />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
