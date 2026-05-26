import React from 'react';
import './project.css';

import unimapLogo from '../../assets/UNIMAP.png';
import aysLogo from '../../assets/AYS.webp';
import cinemythLogo from '../../assets/CINEMYTH.webp';
import zestLogo from '../../assets/ZEST.webp';
import htLogo from '../../assets/HT.webp';
import oakastayLogo from '../../assets/OAKaSTAY.webp';

const Logos = () => {
  return (
    <section className="logos-section">
      {/* Top Border with Monospace Label */}
      <div className="logos-top-bar">
        <span className="logos-label">.logos</span>
      </div>

      {/* Alternating Grid Layout for Logos - Centered symmetrically */}
      <div className="logos-grid">
        {/* Row 1 */}
        <div className="logo-cell empty"></div>
        <div className="logo-cell">
          <img src={unimapLogo} alt="UNIMAP" className="logo-img" />
        </div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell">
          <img src={cinemythLogo} alt="CINEMYTH" className="logo-img" />
        </div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell">
          <img src={htLogo} alt="Hexagon Travels" className="logo-img" />
        </div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell empty"></div>

        {/* Row 2 */}
        <div className="logo-cell empty"></div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell">
          <img src={aysLogo} alt="Atal Yuva Sansad" className="logo-img" />
        </div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell">
          <img src={zestLogo} alt="ZEST" className="logo-img" />
        </div>
        <div className="logo-cell empty"></div>
        <div className="logo-cell">
          <img src={oakastayLogo} alt="OAKaSTAY" className="logo-img" />
        </div>
        <div className="logo-cell empty"></div>
      </div>

      {/* Decorative Bottom Right Icon */}
      <div className="logos-bottom-icon">
        <div className="line"></div>
        <div className="circle"></div>
      </div>
    </section>
  );
};

export default Logos;
