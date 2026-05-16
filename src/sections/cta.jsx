import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './cta.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-header">
          <span className="cta-header-text">.say hello</span>
          <div className="cta-line"></div>
        </div>

        <div className="cta-content">
          <h2 className="cta-headline">
            i'm open for freelance projects,<br />
            feel free to email me to see how<br />
            can we collaborate
          </h2>
          
          <div className="cta-button-container">
            <a href="mailto:harsh.r5983@gmail.com" className="cta-button">
              <span>contact me</span>
              <FiArrowUpRight className="cta-arrow" />
            </a>
          </div>
        </div>

        {/* Decorative element to match the design (target-like icon) */}
        <div className="cta-decorative-target">
          <div className="target-inner"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
