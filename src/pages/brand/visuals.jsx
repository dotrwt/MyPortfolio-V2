import React from 'react';
import './brand.css';

const Visuals = () => {
  return (
    <div className="brand-cell">
      <div className="cell-header">
        <span className="cell-title">05 / VISUAL ELEMENTS</span>
        <span className="cell-corner-mark">+</span>
      </div>
      
      <div className="cell-body">
        <div className="visuals-container">
          {/* Dot Grid Specimen */}
          <div className="dot-grid-placeholder"></div>
          
          {/* Alignment Graphics */}
          <div className="crosshair-row">
            <div className="crosshair-item bracket"></div>
            <div className="crosshair-item plus"></div>
            <div className="crosshair-item circle"></div>
            <div className="crosshair-item plus"></div>
            <div className="crosshair-item bracket" style={{ transform: 'scaleX(-1)' }}></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: '0.55rem', color: '#888888', borderBottom: '1px dashed #E2DFD5', paddingBottom: '0.5rem' }}>
            <span>PROJECT_012</span>
            <span>24.05.26</span>
            <span>14:53</span>
            <span>v1.0</span>
          </div>

          {/* Camera Info Exif Metadata Playbar */}
          <div className="meta-playbar">
            <div className="playbar-controls">
              <div className="play-pause-btn">
                <span></span>
                <span></span>
              </div>
              <span style={{ marginLeft: '0.5rem' }}>IMG_2048.JPG</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span>ISO 400</span>
              <span>35MM</span>
              <span>f/1.8</span>
              <div className="play-triangle" style={{ alignSelf: 'center' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cell-footer">
        UI SYSTEM METADATA & GRID PATTERNS
      </div>
    </div>
  );
};

export default Visuals;
