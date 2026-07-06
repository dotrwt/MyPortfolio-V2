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
              <div className="color-circle" style={{ backgroundColor: '#F6F4EE' }}></div>
              <div className="color-swatch-details">
                <span className="color-swatch-name">Off White</span>
                <span className="color-swatch-hex">#F6F4EE</span>
              </div>
            </div>
            
            {/* Color Swatch 2 */}
            <div className="color-swatch-wrapper">
              <div className="color-circle" style={{ backgroundColor: '#E8E4D6' }}></div>
              <div className="color-swatch-details">
                <span className="color-swatch-name">Paper</span>
                <span className="color-swatch-hex">#E8E4D6</span>
              </div>
            </div>

            {/* Color Swatch 3 */}
            <div className="color-swatch-wrapper">
              <div className="color-circle" style={{ backgroundColor: '#1E1E1E' }}></div>
              <div className="color-swatch-details">
                <span className="color-swatch-name">Graphite</span>
                <span className="color-swatch-hex">#1E1E1E</span>
              </div>
            </div>

            {/* Color Swatch 4 */}
            <div className="color-swatch-wrapper">
              <div className="color-circle" style={{ backgroundColor: '#6D6D6D' }}></div>
              <div className="color-swatch-details">
                <span className="color-swatch-name">Film Gray</span>
                <span className="color-swatch-hex">#6D6D6D</span>
              </div>
            </div>

            {/* Color Swatch 5 */}
            <div className="color-swatch-wrapper">
              <div className="color-circle" style={{ backgroundColor: '#2E2F1E' }}></div>
              <div className="color-swatch-details">
                <span className="color-swatch-name">Dark Olive</span>
                <span className="color-swatch-hex">#2E2F1E</span>
              </div>
            </div>
          </div>
        </div>

        <div className="typo-specimens">
          <div className="typo-section">
            <span className="typo-title">HEADINGS / TITLES</span>
            <span className="typo-font-family" style={{ fontFamily: 'var(--font-display)' }}>Outfit (Neue Montreal)</span>
            <div className="typo-specimen-chars" style={{ fontFamily: 'var(--font-display)', textTransform: 'none' }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              1234567890
            </div>
          </div>

          <div className="typo-section mono-specimen">
            <span className="typo-title">CODE / DETAILS</span>
            <span className="typo-font-family" style={{ fontFamily: 'var(--font-mono)' }}>JetBrains Mono</span>
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
