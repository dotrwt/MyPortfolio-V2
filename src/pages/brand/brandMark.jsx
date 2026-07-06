import React from 'react';
import './brand.css';

const BrandMark = () => {
  return (
    <div className="brand-cell">
      <div className="cell-header">
        <span className="cell-title">02 / BRAND MARK</span>
        <span className="cell-corner-mark">+</span>
      </div>
      
      <div className="cell-body">
        <div className="brand-mark-center">
          <svg className="focus-frame-svg" viewBox="0 0 100 100" fill="none" stroke="#1E1E1E" strokeWidth="2">
            {/* Top-Left Bracket */}
            <path d="M 25 35 L 25 25 L 35 25" strokeLinecap="round" strokeLinejoin="round" />
            {/* Top-Right Bracket */}
            <path d="M 75 35 L 75 25 L 65 25" strokeLinecap="round" strokeLinejoin="round" />
            {/* Bottom-Left Bracket */}
            <path d="M 25 65 L 25 75 L 35 75" strokeLinecap="round" strokeLinejoin="round" />
            {/* Bottom-Right Bracket */}
            <path d="M 75 65 L 75 75 L 65 75" strokeLinecap="round" strokeLinejoin="round" />
            {/* Center Dot */}
            <circle cx="50" cy="50" r="6" fill="#1E1E1E" />
          </svg>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="text-mono" style={{ color: '#1E1E1E', fontSize: '0.6rem' }}>
            FOCUS • FRAME • FUNCTION
          </span>
        </div>

        <div className="symbol-system">
          <div className="symbol-item">
            <div className="symbol-svg-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="1.5">
                <path d="M 4 8 L 4 6 L 6 6" />
                <path d="M 20 8 L 20 6 L 18 6" />
                <path d="M 4 16 L 4 18 L 6 18" />
                <path d="M 20 16 L 20 18 L 18 18" />
                <circle cx="12" cy="12" r="3" fill="#1E1E1E" />
              </svg>
            </div>
            <span className="symbol-name">CAPTURE</span>
            <span className="symbol-desc">photography</span>
          </div>

          <div className="symbol-item">
            <div className="symbol-svg-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="1.5">
                <path d="M 6 8 L 2 12 L 6 16" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 18 8 L 22 12 L 18 16" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="2.5" fill="#1E1E1E" />
              </svg>
            </div>
            <span className="symbol-name">BUILD</span>
            <span className="symbol-desc">development</span>
          </div>

          <div className="symbol-item">
            <div className="symbol-svg-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="1.5">
                <polygon points="12,4 20,18 4,18" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="13" r="2" fill="#1E1E1E" />
              </svg>
            </div>
            <span className="symbol-name">EXPLORE</span>
            <span className="symbol-desc">creativity</span>
          </div>
        </div>

        <div className="dot-configurations">
          <div className="dot-config-item">
            <div className="dot-shape-container">
              <div className="dot-shape"></div>
            </div>
            <span className="dot-config-label">FOCUS</span>
          </div>
          <div className="dot-config-item">
            <div className="dot-shape-container">
              <div className="dot-shape outline"></div>
            </div>
            <span className="dot-config-label">BEGINNING</span>
          </div>
          <div className="dot-config-item">
            <div className="dot-shape-container">
              <div className="dot-shape precision"></div>
            </div>
            <span className="dot-config-label">PRECISION</span>
          </div>
          <div className="dot-config-item">
            <div className="dot-shape-container">
              <div className="dot-shape completion"></div>
            </div>
            <span className="dot-config-label">COMPLETION</span>
          </div>
        </div>
      </div>
      
      <div className="cell-footer">
        SYMBOL SYSTEM & STATE CONFIGURATIONS
      </div>
    </div>
  );
};

export default BrandMark;
