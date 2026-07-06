import React from 'react';
import './brand.css';

const Design = () => {
  return (
    <div className="brand-cell">
      <div className="cell-header">
        <span className="cell-title">04 / COLOR & TYPOGRAPHY</span>
        <span className="cell-corner-mark">+</span>
      </div>
      
      <div className="cell-body">
        <div className="palette-display">
          <div className="colors-row">
            {/* Color Swatch 1 */}
            <div className="color-swatch-wrapper">
              <div className="color-circle" style={{ backgroundColor: '#000000', border: '1px solid #333333' }}></div>
              <div className="color-swatch-details">
                <span className="color-swatch-name">Pure Black</span>
                <span className="color-swatch-hex">#000000</span>
              </div>
            </div>
            
            {/* Color Swatch 2 */}
            <div className="color-swatch-wrapper">
              <div className="color-circle" style={{ backgroundColor: '#0A0A0A', border: '1px solid #333333' }}></div>
              <div className="color-swatch-details">
                <span className="color-swatch-name">Charcoal</span>
                <span className="color-swatch-hex">#0A0A0A</span>
              </div>
            </div>

            {/* Color Swatch 3 */}
            <div className="color-swatch-wrapper">
              <div className="color-circle" style={{ backgroundColor: '#FFFFFF' }}></div>
              <div className="color-swatch-details">
                <span className="color-swatch-name">Pure White</span>
                <span className="color-swatch-hex">#FFFFFF</span>
              </div>
            </div>

            {/* Color Swatch 4 */}
            <div className="color-swatch-wrapper">
              <div className="color-circle" style={{ backgroundColor: '#888888' }}></div>
              <div className="color-swatch-details">
                <span className="color-swatch-name">Muted Gray</span>
                <span className="color-swatch-hex">#888888</span>
              </div>
            </div>

            {/* Color Swatch 5 */}
            <div className="color-swatch-wrapper">
              <div className="color-circle" style={{ backgroundColor: '#1A1A1A' }}></div>
              <div className="color-swatch-details">
                <span className="color-swatch-name">Border Gray</span>
                <span className="color-swatch-hex">#1A1A1A</span>
              </div>
            </div>
          </div>
        </div>

        <div className="typo-specimens">
          <div className="typo-section">
            <span className="typo-title">HEADINGS & DISPLAY</span>
            <span className="typo-font-family" style={{ fontFamily: 'var(--font-display)' }}>Outfit</span>
            <div className="typo-specimen-chars" style={{ fontFamily: 'var(--font-display)', textTransform: 'none' }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              1234567890
            </div>
          </div>

          <div className="typo-section">
            <span className="typo-title">BODY & SANS</span>
            <span className="typo-font-family" style={{ fontFamily: 'var(--font-sans)' }}>Inter</span>
            <div className="typo-specimen-chars" style={{ fontFamily: 'var(--font-sans)', textTransform: 'none' }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              1234567890
            </div>
          </div>

          <div className="typo-section mono-specimen">
            <span className="typo-title">CODE & MONOSPACE</span>
            <span className="typo-font-family" style={{ fontFamily: 'var(--font-mono)' }}>Courier New</span>
            <div className="typo-specimen-chars" style={{ fontFamily: 'var(--font-mono)', textTransform: 'none' }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              1234567890
            </div>
          </div>
        </div>
      </div>
      
      <div className="cell-footer">
        TYPOGRAPHY & DESIGN SYSTEM SPECS
      </div>
    </div>
  );
};

export default Design;
