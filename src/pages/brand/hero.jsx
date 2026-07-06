import React from 'react';
import './brand.css';

const logo = '/logo.png';

const Hero = () => {
    return (
        <div className="brand-cell">
            <div className="cell-header">
                <span className="cell-title">01 / PRIMARY LOGO</span>
                <span className="cell-corner-mark">+</span>
            </div>

            <div className="cell-body">
                <div className="logo-showcase">
                    <div className="logo-image-container">
                        <img src={logo} alt=".dotrwt Logo" className="logo-image" />
                    </div>
                    <div className="logo-separator"></div>
                    <p className="logo-description">
                        I design systems and capture stories. Where code meets composition.
                    </p>
                </div>
            </div>

            <div className="cell-footer">
                <div className="logo-footer-subbrands">
                    <div className="subbrand-item">
                        <span className="subbrand-title">.r</span>
                        <span className="subbrand-label">SIGNATURE</span>
                    </div>
                    <div className="subbrand-item">
                        <span className="subbrand-title">.rwt</span>
                        <span className="subbrand-label">WATERMARK</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
