import React from 'react';
import './about.css';

const AboutSection = () => {
  return (
    <section className="about-details-section">
      <div className="about-details-container">
        <div className="about-photo-wrapper">
          {/* Using a placeholder styled to look like the reference, or an image if available */}
          <div className="about-portrait-placeholder"></div>
        </div>

        <div className="about-text-content">
          <div className="about-block">
            <div className="block-header">
              <span className="block-label">.hello</span>
              <div className="block-line"></div>
            </div>
            <h3 className="block-text">
              my craft is building immersive digital experiences through code, visuals, and 
              storytelling. i believe great design should feel human, intentional, and memorable 
              where creativity and technology work together to create something meaningful
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
