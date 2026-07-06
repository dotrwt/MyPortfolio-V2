import React from 'react';
import './brand.css';

const Print = () => {
  return (
    <div className="brand-cell dark">
      <div className="cell-header">
        <span className="cell-title">09 / PACKAGING & PRINT</span>
        <span className="cell-corner-mark">+</span>
      </div>
      
      <div className="cell-body">
        <div className="packaging-container">
          {/* Envelope with string lock */}
          <div className="envelope-placeholder">
            <div className="envelope-string-lock"></div>
            <div className="envelope-label">
              <span>PROJECT_012</span><br />
              <span>CAPUTRED • BUILT</span><br />
              <span>24.05.26 / v1.0</span>
            </div>
          </div>

          {/* Thank You Card */}
          <div className="thankyou-card-placeholder">
            <span className="thankyou-text">
              thank you for supporting the process.
            </span>
            <span className="thankyou-logo">.rwt</span>
          </div>

          {/* White Card */}
          <div className="thankyou-card-placeholder" style={{ backgroundColor: '#F6F4EE', color: '#1E1E1E', borderColor: '#E2DFD5', height: '110px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem' }}>
              dotrwt.
            </span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
              <span style={{ fontSize: '0.4rem', fontFamily: 'monospace', color: '#777777', textTransform: 'uppercase' }}>
                CREATIVE<br />STUDIO
              </span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="2">
                <path d="M 6 10 L 6 6 L 10 6" />
                <path d="M 18 10 L 18 6 L 14 6" />
                <path d="M 6 14 L 6 18 L 10 18" />
                <path d="M 18 14 L 18 18 L 14 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cell-footer">
        PRINTED ASSETS & ENVELOPE DESIGN
      </div>
    </div>
  );
};

export default Print;
