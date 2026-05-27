import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import BorderGlow from '../components/borderglow/borderglow.jsx';
import Magnet from '../components/magnet/magnet.jsx';
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
            i'm open for projects and collaborations,<br />
            feel free to email me to see how<br />
            can we collaborate
          </h2>

          <div className="cta-button-container">
            <Magnet magnetStrength={3} padding={50}>
              <BorderGlow borderRadius={0} backgroundColor="#000" glowRadius={30} className="cta-glow-wrapper">
                <Link to='/contact' className="cta-button">
                  <span>contact me</span>
                  <FiArrowUpRight className="cta-arrow" />
                </Link>
              </BorderGlow>
            </Magnet>
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
