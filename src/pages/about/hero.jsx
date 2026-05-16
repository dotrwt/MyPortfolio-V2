import React from 'react';
import './about.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <h1 className="about-page-title">about</h1>

        <div className="about-hero-content">
          <h2 className="about-hero-headline">
            i'm a developer, creator, visual storyteller, and coffee lover obsessed with the world of digital
          </h2>
        </div>

        {/* Decorative element */}
        <div className="about-decorative-target">
          <div className="target-inner"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
