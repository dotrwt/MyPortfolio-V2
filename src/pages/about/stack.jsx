import React from 'react';
import './about.css';

// Logo imports
import jsIcon from '../../assets/js.webp';
import tsIcon from '../../assets/typescript.webp';
import cIcon from '../../assets/c.webp';
import cppIcon from '../../assets/cpp.webp';
import reactIcon from '../../assets/react.webp';
import htmlIcon from '../../assets/HTML.webp';
import cssIcon from '../../assets/css.svg';
import tailwindIcon from '../../assets/tailwind.webp';
import viteIcon from '../../assets/vite.webp';
import routerIcon from '../../assets/Reactrouter.svg';
import muiIcon from '../../assets/materialUI.webp';
import bootstrapIcon from '../../assets/bootstrap.webp';
import nodeIcon from '../../assets/nodejs.webp';
import expressIcon from '../../assets/express.webp';
import mongoIcon from '../../assets/mongodb.webp';
import firebaseIcon from '../../assets/firebase.webp';
import vercelIcon from '../../assets/vercel.png';
import renderIcon from '../../assets/render.webp';
import cloudinaryIcon from '../../assets/cloudinary.webp';
import gitIcon from '../../assets/git.webp';
import githubIcon from '../../assets/github.webp';
import postmanIcon from '../../assets/postman.webp';
import hoppscotchIcon from '../../assets/hoppscotch.webp';
import figmaIcon from '../../assets/figma.webp';
import framerIcon from '../../assets/framer.webp';
import lrIcon from '../../assets/lrc.webp';
import prIcon from '../../assets/pr.webp';
import aeIcon from '../../assets/ae.webp';
import vsCodeIcon from '../../assets/VS.webp';
import canvaIcon from '../../assets/canva.png';

const Stack = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', description: 'Interactive Web Programming', icon: jsIcon, level: 3 },
        { name: 'TypeScript', description: 'Type-Safe JavaScript Development', icon: tsIcon, level: 2 },
        { name: 'C', description: 'Core Programming Fundamentals', icon: cIcon, level: 3 },
        { name: 'C++', description: 'Object-Oriented Programming & DSA', icon: cppIcon, level: 2 },
      ]
    },
    {
      category: 'Web Development',
      items: [
        { name: 'React', icon: reactIcon, level: 3 },
        { name: 'HTML5', icon: htmlIcon, level: 3 },
        { name: 'CSS3', icon: cssIcon, level: 3 },
        { name: 'Tailwind CSS', icon: tailwindIcon, level: 3 },
        { name: 'Vite', icon: viteIcon, level: 2 },
        { name: 'React Router', icon: routerIcon, level: 2 },
        { name: 'Material UI', icon: muiIcon, level: 2 },
        { name: 'Bootstrap', icon: bootstrapIcon, level: 2 },
      ]
    },
    {
      category: 'Backend, Database & Cloud',
      items: [
        { name: 'Node.js', icon: nodeIcon, level: 2 },
        { name: 'Express.js', icon: expressIcon, level: 2 },
        { name: 'MongoDB', icon: mongoIcon, level: 3 },
        { name: 'Firebase', icon: firebaseIcon, level: 2 },
        { name: 'Vercel', icon: vercelIcon, level: 2 },
        { name: 'Render', icon: renderIcon, level: 1 },
        { name: 'Cloudinary', icon: cloudinaryIcon, level: 2 },
      ]
    },
    {
      category: 'Tools & Platforms',
      items: [
        { name: 'Git', icon: gitIcon, level: 3 },
        { name: 'GitHub', icon: githubIcon, level: 3 },
        { name: 'VS Code', icon: vsCodeIcon, level: 3 },
        { name: 'Postman', icon: postmanIcon, level: 1 },
        { name: 'Hoppscotch', icon: hoppscotchIcon, level: 3 },
      ]
    },
    {
      category: 'Design & Creative',
      items: [
        { name: 'Figma', description: 'UI/UX Design & Prototyping', icon: figmaIcon, level: 1 },
        { name: 'Framer', description: 'Interactive Website Design', icon: framerIcon, level: 2 },
        { name: 'Canva', description: 'Social & Visual Content Design', icon: canvaIcon, level: 3 },
        { name: 'Lightroom Classic', description: 'Photo Editing & Color Grading', icon: lrIcon, level: 2 },
        { name: 'Premiere Pro', description: 'Video Editing & Storytelling', icon: prIcon, level: 2 },
        { name: 'After Effects', description: 'Motion Graphics & Visual Effects', icon: aeIcon, level: 1 },
      ]
    }
  ];

  return (
    <section className="stack-section">
      <div className="stack-container">
        <div className="stack-header">
          <span className="stack-label">.skills</span>
          <div className="stack-line"></div>
        </div>

        <div className="stack-content">
          {skillsData.map((group, idx) => (
            <div key={idx} className="stack-category-group">
              <h3 className="stack-category-title">{group.category}</h3>
              <div className="stack-grid">
                {group.items.map((item, index) => (
                  <div key={index} className="stack-item">
                    <div className="stack-icon-wrapper">
                      {item.icon ? (
                        <img src={item.icon} alt={item.name} className="stack-icon" />
                      ) : (
                        <div className="stack-icon-placeholder"></div>
                      )}
                    </div>
                    <div className="stack-info">
                      <div className="stack-name-row">
                        <h3 className="stack-name">{item.name}</h3>
                        <div className="stack-level" title={`Proficiency: Level ${item.level} of 3`}>
                          {[1, 2, 3].map((dot) => (
                            <span key={dot} className={`level-dot ${item.level >= dot ? 'filled' : 'empty'}`}></span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="stack-target">
                      <div className="target-inner"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
