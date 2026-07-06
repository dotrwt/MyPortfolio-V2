import React from 'react';
import './brand.css';

const Photography = () => {
  return (
    <div className="brand-cell dark">
      <div className="cell-header">
        <span className="cell-title">06 / PHOTOGRAPHY STYLE</span>
        <span className="cell-corner-mark">+</span>
      </div>
      
      <div className="cell-body">
        <div className="photo-strips-grid" style={{ marginBottom: '1.5rem' }}>
          {/* Strip 1: Natural Light (Mountains representation) */}
          <div className="photo-strip-col">
            <div className="photo-strip-image-placeholder" style={{
              background: 'linear-gradient(135deg, #111 0%, #333 50%, #222 100%)'
            }}>
              {/* Graphic representation of mountains */}
              <svg width="100%" height="100%" viewBox="0 0 50 150" preserveAspectRatio="none" style={{ opacity: 0.3 }}>
                <polygon points="0,150 25,70 50,150" fill="#444" />
                <polygon points="10,150 35,90 50,150" fill="#555" />
              </svg>
              <div className="photo-strip-gradient"></div>
              <span className="photo-strip-overlay-label">NATURAL LIGHT</span>
            </div>
          </div>

          {/* Strip 2: Real Moments (Pine Forest representation) */}
          <div className="photo-strip-col">
            <div className="photo-strip-image-placeholder" style={{
              background: 'linear-gradient(to bottom, #111 0%, #292929 100%)'
            }}>
              {/* Graphic representation of trees */}
              <svg width="100%" height="100%" viewBox="0 0 50 150" preserveAspectRatio="none" style={{ opacity: 0.25 }}>
                <line x1="25" y1="20" x2="25" y2="150" stroke="#777" strokeWidth="1" />
                <polygon points="25,40 15,60 35,60" fill="#777" />
                <polygon points="25,60 10,90 40,90" fill="#777" />
                <polygon points="25,90 5,130 45,130" fill="#777" />
              </svg>
              <div className="photo-strip-gradient"></div>
              <span className="photo-strip-overlay-label">REAL MOMENTS</span>
            </div>
          </div>

          {/* Strip 3: Shadows (Portrait Silhouette representation) */}
          <div className="photo-strip-col">
            <div className="photo-strip-image-placeholder" style={{
              background: 'linear-gradient(to top, #111 0%, #3a3a3a 100%)'
            }}>
              {/* Graphic representation of silhouette */}
              <svg width="100%" height="100%" viewBox="0 0 50 150" preserveAspectRatio="none" style={{ opacity: 0.35 }}>
                <circle cx="25" cy="55" r="10" fill="#111" />
                <path d="M 10 100 C 10 75, 40 75, 40 100 L 40 150 L 10 150 Z" fill="#111" />
              </svg>
              <div className="photo-strip-gradient"></div>
              <span className="photo-strip-overlay-label">SHADOWS</span>
            </div>
          </div>

          {/* Strip 4: Details (Coffee Cup representation) */}
          <div className="photo-strip-col">
            <div className="photo-strip-image-placeholder" style={{
              background: 'linear-gradient(45deg, #181818 0%, #2d2d2d 100%)'
            }}>
              {/* Graphic representation of a cup */}
              <svg width="100%" height="100%" viewBox="0 0 50 150" style={{ opacity: 0.3 }}>
                {/* Cup Body */}
                <path d="M 15 65 L 35 65 L 32 90 L 18 90 Z" fill="none" stroke="#777" strokeWidth="1.5" />
                {/* Cup Handle */}
                <path d="M 34 70 C 40 70, 40 85, 33 85" fill="none" stroke="#777" strokeWidth="1.5" />
                {/* Shadow/Ground Line */}
                <line x1="10" y1="95" x2="40" y2="95" stroke="#444" strokeWidth="1" />
              </svg>
              <div className="photo-strip-gradient"></div>
              <span className="photo-strip-overlay-label">DETAILS</span>
            </div>
          </div>

          {/* Strip 5: Story (Leaves projection/shadow representation) */}
          <div className="photo-strip-col">
            <div className="photo-strip-image-placeholder" style={{
              background: 'linear-gradient(to bottom, #222 0%, #151515 100%)'
            }}>
              {/* Graphic representation of leaf shadows */}
              <svg width="100%" height="100%" viewBox="0 0 50 150" style={{ opacity: 0.2 }}>
                <path d="M 5,20 C 15,30 25,10 45,35" fill="none" stroke="#999" strokeWidth="1" />
                <path d="M 12,24 C 5,30 8,42 12,24" fill="#999" />
                <path d="M 22,20 C 18,12 25,5 22,20" fill="#999" />
                <path d="M 32,23 C 38,30 38,15 32,23" fill="#999" />
              </svg>
              <div className="photo-strip-gradient"></div>
              <span className="photo-strip-overlay-label">STORY</span>
            </div>
          </div>
        </div>

        <div className="photo-labels-footer">
          <span>LIGHT</span>
          <span>•</span>
          <span>MOMENTS</span>
          <span>•</span>
          <span>SHADOWS</span>
          <span>•</span>
          <span>DETAILS</span>
        </div>
      </div>
      
      <div className="cell-footer">
        VISUAL ART DIRECTION & PHOTO CHARACTERISTICS
      </div>
    </div>
  );
};

export default Photography;
