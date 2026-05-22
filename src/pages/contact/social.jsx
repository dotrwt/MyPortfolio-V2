import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaPinterest } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";
import './contact.css';

const Socials = () => {
  const socialList = [
    {
      id: 'twitter',
      name: 'twitter',
      handle: '@HarshvardhanRaw',
      url: 'https://twitter.com/HarshvardhanRaw',
      icon: <FaTwitter size={20} />
    },
    {
      id: 'instagram',
      name: 'instagram',
      handle: '@rawwithharsh',
      url: 'https://instagram.com/rawwithharsh',
      icon: <FaInstagram size={20} />
    },
    {
      id: 'linkedin',
      name: 'linkedin',
      handle: '@Harshvardhan-Rawat',
      url: 'https://linkedin.com/in/Harshvardhan-Rawat',
      icon: <CiLinkedin size={25} />
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: '@dotrwt',
      url: 'https://github.com/dotrwt',
      icon: <FaGithub size={20} />
    },
    {
      id: 'pinterest',
      name: 'pintrest',
      handle: '@dotrwtt',
      url: 'https://pintrest.com/dotrwtt',
      icon: <FaPinterest size={20} />
    }

  ];

  return (
    <div className="contact-social-grid">
      <div className="socials-list">
        {socialList.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-item-row"
          >
            {/* Left Box: Icon and Details */}
            <div className="social-item-content">
              <div className="social-icon-box">
                {item.icon}
              </div>
              <div className="social-details">
                <span className="social-name">{item.name}</span>
                <span className="social-handle">{item.handle}</span>
              </div>
            </div>

            {/* Right Box: Target Line Badge */}
            <div className="social-badge-col">
              <div className="social-badge-line"></div>
              <div className="social-badge-circle"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
