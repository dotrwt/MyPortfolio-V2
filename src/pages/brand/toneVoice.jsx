import React from 'react';
import './brand.css';

const ToneVoice = () => {
  return (
    <div className="brand-cell">
      <div className="cell-header">
        <span className="cell-title">07 / TONE OF VOICE</span>
        <span className="cell-corner-mark">+</span>
      </div>
      
      <div className="cell-body">
        <div className="tone-voice-body">
          <div className="tone-attributes-list">
            <span className="tone-attribute">Thoughtful.</span>
            <span className="tone-attribute">Minimal.</span>
            <span className="tone-attribute">Honest.</span>
            <span className="tone-attribute">Technical.</span>
            <span className="tone-attribute">Creative.</span>
          </div>
          
          <div className="tone-description-box">
            <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem', color: '#1E1E1E', lineHeight: '1.5' }}>
              We don't chase trends.
            </p>
            <p style={{ margin: '0.5rem 0 0 0', fontWeight: 500, fontSize: '1rem', color: '#1E1E1E', lineHeight: '1.5' }}>
              We build with intention and capture what matters.
            </p>
          </div>
        </div>
      </div>
      
      <div className="cell-footer">
        EDITORIAL STANDARDS & EDITORIAL VALUES
      </div>
    </div>
  );
};

export default ToneVoice;
