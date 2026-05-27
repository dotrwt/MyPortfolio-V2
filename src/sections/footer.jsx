import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaInstagram, FaGithub, FaPinterest, FaLinkedinIn } from 'react-icons/fa6';
import Magnet from '../components/magnet/magnet.jsx';
import './footer.css';

const changingWords = ['design', 'create', 'build'];

const Footer = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <span className="footer-header-text">.bye?</span>
          <div className="footer-line"></div>
        </div>

        <div className="footer-headline">
          <h1>
            Lets <span key={wordIndex} className="changing-word">{changingWords[wordIndex]}</span>
          </h1>
          <h1 className="text-outline-footer">incredible work together.</h1>
        </div>

        <div className="footer-contact-grid">
          <div className="contact-col">
            <span className="label">Email</span>
            <a href="mailto:harsh.dotrwt@gmail.com" className="contact-link">harsh.dotrwt@gmail.com</a>
          </div>
          <div className="contact-col">
            <span className="label">Call Me</span>
            <Link to='/contact' className="contact-link">Book Now</Link>
          </div>
          <div className="contact-col">
            <span className="label">Social</span>
            <div className="social-icons">
              <Magnet magnetStrength={4} padding={15}>
                <a href="https://x.com/dotrwt" className="social-icon" target="_blank"><FaXTwitter size={20} /></a>
              </Magnet>
              <Magnet magnetStrength={4} padding={15}>
                <a href="https://www.instagram.com/rawwithharsh" className="social-icon" target="_blank"><FaInstagram size={20} /></a>
              </Magnet>
              <Magnet magnetStrength={4} padding={15}>
                <a href="https://www.linkedin.com/in/harshvardhan-rawat" className="social-icon" target="_blank"><FaLinkedinIn size={20} /></a>
              </Magnet>
              <Magnet magnetStrength={4} padding={15}>
                <a href="https://github.com/dotrwt" className="social-icon" target="_blank"><FaGithub size={20} /></a>
              </Magnet>
              <Magnet magnetStrength={4} padding={15}>
                <a href="https://in.pinterest.com/dotrwtt" className="social-icon" target="_blank"><FaPinterest size={20} /></a>
              </Magnet>
            </div>
          </div>
        </div>

        <div className="footer-bottom-line"></div>

        <div className="footer-links-grid">
          <div className="links-col">
            <span className="label">Menu</span>
            <div className="links-group">
              <div className="links-subgroup">
                <Link to="/">Home</Link>
                <Link to="/project">Work</Link>
              </div>
              <div className="links-subgroup">
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
              </div>
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
