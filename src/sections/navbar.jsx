import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const indicatorRef = useRef(null);

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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          .rwt
        </Link>
        <div className="navbar-links">
          <Link to="/projects" className="nav-link">projects</Link>
          <Link to="/about" className="nav-link">about</Link>
          <Link to="/gallery" className="nav-link">gallery</Link>
          <Link to="/contact" className="nav-link">contact</Link>
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
