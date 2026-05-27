import React from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import HeroSection from './hero';
import ProjectsGallery from './projectsGallery';
import Logos from './logos';
import GridBackground from '../../components/GridBackground';
import useSEO from '../../hooks/useSEO';

const ProjectsPage = () => {
  useSEO({
    title: 'Work & Selected Projects',
    description: 'Explore the portfolio and selected engineering and design works of Harshvardhan Rawat, including UniMap, Oak & Stay, and Cinemyth.'
  });

  return (
    <>
      <GridBackground />
      <Navbar />

      <main id="projects-page">
        <HeroSection />
        <Logos />
        <ProjectsGallery />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;

