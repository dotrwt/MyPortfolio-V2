import React from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import GridBackground from '../../components/GridBackground';
import useSEO from '../../hooks/useSEO';

// Sub-components
import Hero from './hero';
import BrandMark from './brandMark';
import Application from './application';
import Design from './design';
import Visuals from './visuals';
import Photography from './photography';
import ToneVoice from './toneVoice';
import BrandApplications from './brandApplications';
import Print from './print';

// Styles
import './brand.css';

const BrandPage = () => {
  useSEO({
    title: 'Brand Identity',
    description: 'Visual identity system, branding tokens, and collateral design specifications for Harshvardhan Rawat (.rwt / dotrwt).'
  });

  return (
    <>
      <GridBackground />
      <Navbar />
      
      <main id="brand-page" className="brand-page-container">
        <header className="brand-page-header">
          <span className="brand-page-meta">00 / BRAND IDENTITY SYSTEM</span>
          <h1 className="brand-page-headline">brand book.</h1>
        </header>

        <div className="brand-grid">
          <Hero />
          <BrandMark />
          <Application />
          <Design />
          <Visuals />
          <Photography />
          <ToneVoice />
          <BrandApplications />
          <Print />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BrandPage;
