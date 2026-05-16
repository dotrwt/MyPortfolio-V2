import React from 'react';
import './about.css';

// Importing local assets
import framerIcon from '../../assets/framer_logo_icon_147284.webp';
import reactIcon from '../../assets/react.png';
import nodeIcon from '../../assets/nodejs-image.webp';
import mongodbIcon from '../../assets/mongodb-logo-png_seeklogo-481256.png';
import expressIcon from '../../assets/136-1363736_express-js-icon-png-transparent-png.png';
// Using placeholders/icons for missing ones or the ones with long names
import figmaIcon from '../../assets/6fe8c744-e5e1-40f1-a462-9d1793090d6e-cover.png';

import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";

const Stack = () => {
  const stackItems = [
    { name: 'Framer', category: 'web design', icon: framerIcon, isImg: true },
    { name: 'React', category: 'illustration', icon: reactIcon, isImg: true },
    { name: 'Figma', category: 'product design', icon: figmaIcon, isImg: true },
    { name: 'Node', category: 'productivity', icon: nodeIcon, isImg: true },
    { name: 'MongoDB', category: 'Database', icon: mongodbIcon, isImg: true },
    { name: 'Express', category: 'automation', icon: expressIcon, isImg: true },
    { name: 'JavaScript', category: 'podcasting', icon: <IoLogoJavascript style={{color: '#F7DF1E'}}/>, isImg: false },
    { name: 'CSS', category: 'math', icon: <FaCss3Alt style={{color: '#1572B6'}}/>, isImg: false },
    { name: 'HTML', category: 'email marketing', icon: <FaHtml5 style={{color: '#E34F26'}}/>, isImg: false },
  ];

  return (
    <section className="stack-section">
      <div className="stack-container">
        <div className="stack-header">
          <span className="stack-label">.stack</span>
          <div className="stack-line"></div>
        </div>

        <div className="stack-grid">
          {stackItems.map((item, index) => (
            <div key={index} className="stack-item">
              <div className="stack-icon-wrapper">
                {item.isImg ? (
                  <img src={item.icon} alt={item.name} className="stack-icon" />
                ) : (
                  <div className="stack-icon-svg">{item.icon}</div>
                )}
              </div>
              <div className="stack-info">
                <h3 className="stack-name">{item.name}</h3>
                <p className="stack-category">{item.category}</p>
              </div>
              
              <div className="stack-target">
                <div className="target-inner"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
