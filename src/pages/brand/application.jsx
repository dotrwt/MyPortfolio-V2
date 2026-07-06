import React from 'react';
import './brand.css';

const Application = () => {
  return (
    <div className="brand-cell dark">
      <div className="cell-header">
        <span className="cell-title">03 / APPLICATIONS</span>
        <span className="cell-corner-mark">+</span>
      </div>
      
      <div className="cell-body">
        <div className="app-mockups-container">
          {/* Card Mockup 1: Dark */}
          <div className="card-mockup">
            <span className="card-logo">dotrwt.</span>
            <div className="card-details">
              <span className="card-role" style={{ color: '#888888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                CAPTURE. BUILD. DESIGN.
              </span>
            </div>
            {/* Absolute positioned small corner mark */}
            <span style={{ position: 'absolute', right: '1.5rem', bottom: '1.5rem', fontFamily: 'monospace', fontSize: '0.5rem', color: '#444444' }}>
              .r
            </span>
          </div>

          {/* Card Mockup 2: Light */}
          <div className="card-mockup light">
            <div>
              <span className="card-name" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Harshvardhan Rawat
              </span>
              <div className="card-role" style={{ fontSize: '0.55rem', color: '#666666', marginTop: '2px' }}>
                developer — photographer
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div className="card-contact">
                <div>hello@dotrwt.in</div>
                <div>www.dotrwt.in</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="1.5">
                <path d="M 6 10 L 6 6 L 10 6" />
                <path d="M 18 10 L 18 6 L 14 6" />
                <path d="M 6 14 L 6 18 L 10 18" />
                <path d="M 18 14 L 18 18 L 14 18" />
                <circle cx="12" cy="12" r="2.5" fill="#1E1E1E" />
              </svg>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Circular Stamp Mockup */}
            <div className="circular-stamp">
              <span className="stamp-center">
                <span style={{ fontSize: '0.4rem', color: '#888888', fontWeight: 'bold' }}>.rwt</span>
              </span>
              {/* Circular SVG text path to simulate circular text */}
              <svg width="100" height="100" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0 }}>
                <path id="stamp-path" d="M 50,15 A 35,35 0 1,1 49.9,15" fill="none" />
                <text fill="#888888" fontSize="5.5" fontFamily="Courier New, monospace" letterSpacing="2.2">
                  <textPath href="#stamp-path" startOffset="0%">
                    DOTRWT • CAPTURE • BUILD • DESIGN •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Sticker Mockup */}
            <div className="sticker-mockup">
              dotrwt.
            </div>
          </div>
        </div>
      </div>
      
      <div className="cell-footer">
        COLLATERAL & PHYSICAL STATIONERY MOCKUPS
      </div>
    </div>
  );
};

export default Application;
