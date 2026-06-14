import React, { useState, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import BorderGlow from '../../components/borderglow/borderglow.jsx';
import Magnet from '../../components/magnet/magnet.jsx';
import './event.css';

const ViewFullAlbum = ({ driveLink }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="event-album-section">
      <div className="event-album-container">
        <div className="event-album-header">
          <span className="event-album-header-text">.all files</span>
          <div className="event-album-line"></div>
        </div>

        <div className="event-album-content">
          <h2 className="event-album-headline">
            want to view the full event gallery?<br />
            drives will open soon! Stay Tuned for updates. <br />
            {/* explore all high-resolution digital files on drive. */}
          </h2>

          <div className="event-album-button-container">
            <Magnet 
              magnetStrength={3} 
              padding={50}
              disabled={isMobile}
              style={isMobile ? { width: '100%', display: 'block' } : {}}
            >
              <BorderGlow borderRadius={0} backgroundColor="#000" glowRadius={30} className="event-album-glow-wrapper">
                <a 
                  href={driveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="event-album-button"
                >
                  <span>view full album</span>
                  <FiArrowUpRight className="event-album-arrow" />
                </a>
              </BorderGlow>
            </Magnet>
          </div>
        </div>

        {/* Decorative target icon matching portfolio style */}
        <div className="event-album-decorative-target">
          <div className="target-inner"></div>
        </div>
      </div>
    </section>
  );
};

export default ViewFullAlbum;
