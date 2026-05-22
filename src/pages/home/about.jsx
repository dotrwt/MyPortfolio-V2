import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="home-section about-section">
      <div className="about-grid">
        
        {/* Left Side: Header and Text */}
        <div className="about-content-left">
          <div className="about-header">
            <span className="about-label">.about</span>
            <div className="about-line"></div>
          </div>
          
          <p className="about-text">
            my craft is building experiences that bring value to people and celebrate function over form. let's hide the ego and give some freedom to creativity and make the first small step changing the world to a better place
          </p>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="about-content-right">
          <div 
            className="about-image-placeholder"
            style={{ backgroundImage: 'url(https://picsum.photos/seed/about-portrait/800/1000)' }}
          ></div>
          
          <div className="about-button-wrapper">
             <button className="about-me-btn">
               about me ↗
             </button>
          </div>
        </div>
        
      </div>
      
      {/* Crosshair Element */}
      <div className="about-crosshair-decorative">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="8" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            <line x1="0" y1="20" x2="40" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
