import React from 'react';
import './brand.css';

const BrandApplications = () => {
  return (
    <div className="brand-cell">
      <div className="cell-header">
        <span className="cell-title">08 / BRAND APPLICATIONS</span>
        <span className="cell-corner-mark">+</span>
      </div>
      
      <div className="cell-body">
        <div className="brand-apps-row">
          {/* App 1: Notebook */}
          <div className="brand-app-item">
            <div className="brand-app-notebook"></div>
            <span style={{ position: 'absolute', bottom: '0.4rem', fontSize: '0.45rem', fontFamily: 'monospace', color: '#888888' }}>
              ideas
            </span>
          </div>

          {/* App 2: Tag / Camera label */}
          <div className="brand-app-item dark">
            <div className="brand-app-camera"></div>
            <span style={{ position: 'absolute', bottom: '0.4rem', fontSize: '0.45rem', fontFamily: 'monospace', color: '#666666' }}>
              device
            </span>
          </div>

          {/* App 3: Tape roll */}
          <div className="brand-app-item">
            <div className="brand-app-tape"></div>
            <span style={{ position: 'absolute', bottom: '0.4rem', fontSize: '0.45rem', fontFamily: 'monospace', color: '#888888' }}>
              packaging
            </span>
          </div>

          {/* App 4: Folder cover */}
          <div className="brand-app-item dark" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '48px', backgroundColor: '#222222', border: '1px solid #333333', borderRadius: '3px', position: 'relative', display: 'flex', alignItems: 'center', justifySelf: 'center' }}>
              <div style={{ position: 'absolute', bottom: '6px', left: '6px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#555555' }}></div>
            </div>
            <span style={{ position: 'absolute', bottom: '0.4rem', fontSize: '0.45rem', fontFamily: 'monospace', color: '#666666' }}>
              portfolio
            </span>
          </div>
        </div>
      </div>
      
      <div className="cell-footer">
        PHYSICAL SPECIMENS & COLLATERALS
      </div>
    </div>
  );
};

export default BrandApplications;
