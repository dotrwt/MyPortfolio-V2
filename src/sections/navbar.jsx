import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
