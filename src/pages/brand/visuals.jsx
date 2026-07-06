import React, { useState } from 'react';
import './brand.css';

const Visuals = () => {
  const [activeElement, setActiveElement] = useState(null);

  const elements = [
    { id: 'lanyard', label: '3D Physics Lanyard', desc: 'Kinematic rigid card simulation' },
    { id: 'cat', label: 'Cozy Pixel Cat', desc: 'Pixel-art SVG interaction states' },
    { id: 'glow', label: 'Dynamic Border Glow', desc: 'CSS angle sweep on pointer hover' },
    { id: 'grid', label: 'Technical Dot Grid', desc: 'Radial background grid system' },
    { id: 'magnet', label: 'Magnet Buttons', desc: 'Spring-based micro-interactions' },
    { id: 'preloader', label: 'System Preloader', desc: 'Intro sequence loader transition' },
  ];

  return (
    <div className="brand-cell">
      <div className="cell-header">
        <span className="cell-title">05 / VISUAL ELEMENTS</span>
        <span className="cell-corner-mark">+</span>
      </div>
      
      <div className="cell-body">
        <div className="visuals-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Dot Grid Specimen */}
          <div className="dot-grid-placeholder" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '0.45rem', letterSpacing: '0.15em', color: '#888888', backgroundColor: '#F6F4EE', padding: '2px 6px', borderRadius: '2px', border: '1px solid #E2DFD5', textTransform: 'uppercase' }}>
              dot grid pattern
            </span>
          </div>

          {/* Interactive Visual Elements List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', border: '1px solid #E2DFD5', borderRadius: '4px', padding: '0.6rem', backgroundColor: 'rgba(0,0,0,0.01)' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '0.5rem', color: '#999999', textTransform: 'uppercase', marginBottom: '2px', display: 'block' }}>
              System Components:
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
              {elements.map((el) => (
                <div 
                  key={el.id}
                  onMouseEnter={() => setActiveElement(el.id)}
                  onMouseLeave={() => setActiveElement(null)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0.4rem 0.5rem',
                    border: '1px solid #E2DFD5',
                    borderRadius: '3px',
                    backgroundColor: activeElement === el.id ? '#1E1E1E' : '#ffffff',
                    color: activeElement === el.id ? '#F6F4EE' : '#1E1E1E',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: '0.55rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
                    {el.label}
                  </span>
                  <span style={{ fontSize: '0.45rem', color: activeElement === el.id ? '#888888' : '#666666', marginTop: '1px', fontFamily: 'sans-serif' }}>
                    {el.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Alignment Graphics */}
          <div className="crosshair-row" style={{ height: '40px' }}>
            <div className="crosshair-item bracket"></div>
            <div className="crosshair-item plus"></div>
            <div className="crosshair-item circle"></div>
            <div className="crosshair-item plus"></div>
            <div className="crosshair-item bracket" style={{ transform: 'scaleX(-1)' }}></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: '0.55rem', color: '#888888', borderBottom: '1px dashed #E2DFD5', paddingBottom: '0.5rem', marginTop: '-0.2rem' }}>
            <span>PROJECT_012</span>
            <span>24.05.26</span>
            <span>14:53</span>
            <span>v1.0</span>
          </div>

          {/* Camera Info Exif Metadata Playbar */}
          <div className="meta-playbar" style={{ marginTop: '-0.2rem' }}>
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
