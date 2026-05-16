import React from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaInstagram, FaDribbble, FaBehance, FaLinkedinIn } from 'react-icons/fa6';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <span className="footer-header-text">.bye?</span>
          <div className="footer-line"></div>
        </div>

        <div className="footer-headline">
          <h1>Lets design</h1>
          <h1 className="text-outline">incredible work together.</h1>
        </div>

        <div className="footer-contact-grid">
          <div className="contact-col">
            <span className="label">Email</span>
            <a href="mailto:harsh.r5983@gmail.com" className="contact-link">harsh.r5983@gmail.com</a>
          </div>
          <div className="contact-col">
            <span className="label">Call Me</span>
            <a href="#" className="contact-link">Book Now</a>
          </div>
          <div className="contact-col">
            <span className="label">Social</span>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaXTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaDribbble /></a>
              <a href="#" className="social-icon"><FaBehance /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-line"></div>

        <div className="footer-links-grid">
          <div className="links-col">
            <span className="label">Menu</span>
            <div className="links-group">
              <div className="links-subgroup">
                <Link to="/projects">Work</Link>
                <Link to="/pricing">Pricing</Link>
              </div>
              <div className="links-subgroup">
                <Link to="/services">Services</Link>
                <Link to="/blog">Blog</Link>
              </div>
            </div>
          </div>
          <div className="links-col">
            <span className="label">Legal</span>
            <div className="links-subgroup">
              <Link to="/terms">Terms of service</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className="copyright-col">
            <span>© 2026 Harshvardhan Rawat</span>
          </div>
        </div>

        <div className="footer-display-text">
          HARSH
        </div>
      </div>
    </footer>
  );
};

export default Footer;
