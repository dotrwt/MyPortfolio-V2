import React, { useState, useEffect } from 'react';
import './home.css';

const focusAreas = [
  'digital stories', 
  'software interfaces', 
  'interactive experiences', 
  'cinematic interfaces'
];

const Hero = () => {
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % focusAreas.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-top-row">
          <div className="hero-intro">
            <span className="text-mono intro-text">hey, i'm harshvardhan rawat</span>
          </div>

          <div className="hero-status">
            <span className="status-dot" style={{ marginTop: '7px' }}></span>
            <span className="text-mono status-text">available for new projects</span>
          </div>
        </div>

        {/* Headline */}
        <div className="hero-title-container">
          <h1 className="hero-title">
            <span className="hero-title-line">a creative developer</span>
            <span className="hero-title-line">partner with focus on</span>
            <span className="hero-title-line">
              <span key={focusIndex} className="hero-changing-word">{focusAreas[focusIndex]}</span>
            </span>
          </h1>
        </div>

        {/* Crosshair target graphic */}
        <div className="hero-crosshair">
          <div className="crosshair-symbol">
            <svg viewBox="0 0 100 100" className="crosshair-svg">
              {/* Outer circle */}
              <circle cx="50" cy="50" r="30" className="crosshair-circle-svg" />
              {/* Cross lines */}
              <line x1="10" y1="50" x2="90" y2="50" className="crosshair-line-svg" />
              {/* Vertical line shorter, just intersecting */}
              <line x1="50" y1="35" x2="50" y2="65" className="crosshair-line-svg" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

