import React from 'react';
import './brand.css';
import { optimizeCloudinaryUrl } from '../../utils/cloudinary';

const Print = () => {
  return (
    <div className="brand-cell dark print-cell-container" style={{ overflow: 'hidden', padding: 0 }}>
      {/* Background Cover Image */}
      <img
        src={optimizeCloudinaryUrl("https://res.cloudinary.com/dph28qrrx/image/upload/v1783325315/printing_ffundz.png", 1200)}
        alt="Packaging and Print Specimen"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.9,
          zIndex: 1
        }}
      />

      <div className="cell-header" style={{ position: 'relative', zIndex: 2, padding: '2.5rem 2.5rem 0' }}>
        <span className="cell-title" style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>08 / PACKAGING & PRINT</span>
        <span className="cell-corner-mark" style={{ color: '#ffffff' }}>+</span>
      </div>

      <div className="cell-body" style={{ position: 'relative', zIndex: 2 }}></div>

      <div className="cell-footer" style={{ position: 'relative', zIndex: 2, padding: '0 2.5rem 2.5rem', color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
        PRINTED ASSETS & ENVELOPE DESIGN
      </div>
    </div>
  );
};

export default Print;
