import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const indicatorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (indicatorRef.current) {
            if (totalScroll > 0) {
              const progress = (window.scrollY / totalScroll) * 100;
              indicatorRef.current.style.width = `${progress}%`;
            } else {
              indicatorRef.current.style.width = '0%';
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          .rwt
        </Link>
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>projects</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>about</Link>
          <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>gallery</Link>
          <Link to="/events" className="nav-link" onClick={() => setIsOpen(false)}>events</Link>
          <Link to="/brand" className="nav-link" onClick={() => setIsOpen(false)}>brand</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>contact</Link>
        </div>
        {/* Scroll Progress Indicator Line */}
        <div 
          ref={indicatorRef}
          className="navbar-scroll-indicator" 
        />
      </div>
    </nav>
  );
};

export default Navbar;
