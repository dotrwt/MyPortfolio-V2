import React from 'react';
import { Link } from 'react-router-dom';
import './oops.css';

const Oops = () => {
  return (
    <section className="oops-section">
      <div className="oops-grid-container">
        {/* Background Grid Lines */}
        <div className="oops-grid-lines">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="oops-grid-line"></div>
          ))}
        </div>

        {/* Content */}
        <div className="oops-content">
          <h1 className="oops-title">oops...</h1>
          
          <div className="oops-numbers">
            <div className="oops-number-col oops-col-1">
              <span className="oops-num">4</span>
            </div>
            <div className="oops-number-col oops-col-3">
              <span className="oops-num">0</span>
            </div>
            <div className="oops-number-col oops-col-5">
              <span className="oops-num">4</span>
            </div>
          </div>

          <div className="oops-footer-row">
            <div className="oops-button-col">
              <Link to="/" className="oops-back-button">
                back to homepage ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Targets */}
        <div className="oops-decorative-targets">
          <div className="oops-target"><div className="oops-target-inner"></div></div>
          <div className="oops-target"><div className="oops-target-inner"></div></div>
          <div className="oops-target"><div className="oops-target-inner"></div></div>
        </div>
      </div>
    </section>
  );
};

export default Oops;
