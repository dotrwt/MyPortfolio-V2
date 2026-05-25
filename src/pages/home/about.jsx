import React from 'react';
import { Link } from 'react-router-dom';
import BorderGlow from '../../components/borderglow/borderglow.jsx';
import { optimizeCloudinaryUrl } from '../../utils/cloudinary';

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
            I'm Harshvardhan <br /> a full stack developer, photographer, and creative mind passionate about building experiences that feel immersive, intentional, and memorable.
          </p>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="about-content-right">
          <div
            className="about-image-placeholder"
            style={{ backgroundImage: `url(${optimizeCloudinaryUrl('https://res.cloudinary.com/dph28qrrx/image/upload/v1779532244/copy_of_dp_pn85e0.png', 600)})` }}
          ></div>

          <div className="about-button-wrapper">
            <BorderGlow borderRadius={0} backgroundColor="#000" glowRadius={30} className="btn-glow-wrapper">
              <Link to="/about" className="about-me-btn">
                about me ↗
              </Link>
            </BorderGlow>
          </div>
        </div>

      </div>

      {/* Crosshair Element */}
      <div className="about-crosshair-decorative">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="8" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="0" y1="20" x2="40" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
