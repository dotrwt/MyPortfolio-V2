import React from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import GridBackground from '../../components/GridBackground';
import useSEO from '../../hooks/useSEO';
import LazyRender from '../../components/LazyRender';

// Sub-components
import Hero from './hero';
import BrandMark from './brandMark';
import Application from './application';
import Design from './design';
import Visuals from './visuals';
import Photography from './photography';
import ToneVoice from './toneVoice';
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
          <LazyRender><Application /></LazyRender>
          <LazyRender><Design /></LazyRender>
          <LazyRender><Visuals /></LazyRender>
          <LazyRender><Photography /></LazyRender>
          <LazyRender><ToneVoice /></LazyRender>
          <LazyRender className="print-cell-container"><Print /></LazyRender>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BrandPage;
