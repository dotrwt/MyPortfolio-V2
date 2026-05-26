import React from 'react';
import { optimizeCloudinaryUrl } from '../utils/cloudinary';
import '../pages/projects/project.css';

const ProjectCard = ({ 
  category, 
  title, 
  image, 
  description, 
  techStack = [], 
  projectUrl, 
  githubUrl 
}) => {
  const hasImage = !!image;

  return (
    <div className="project-card">
      {/* Background Image (Blurred) */}
      <div 
        className="project-card-bg-blurred" 
        style={hasImage ? { backgroundImage: `url(${optimizeCloudinaryUrl(image, 100)})` } : { background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.05) 100%)' }}
      />
      
      {/* Foreground Mockup */}
      <div className="project-card-mockup-container">
        <div className="project-card-mockup">
          <div className="mockup-browser-bar">
            <span className="mockup-dot red"></span>
            <span className="mockup-dot yellow"></span>
            <span className="mockup-dot green"></span>
          </div>
          {hasImage ? (
            <img src={optimizeCloudinaryUrl(image, 600)} alt={category || title} className="mockup-image" />
          ) : (
            <div className="mockup-placeholder-fallback">
              <span className="placeholder-text">{category || title}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Header (Always Visible on Top) */}
      <div className="project-card-header">
        <span className="project-category">{category || title}</span>
        <div className="project-icon-toggle">
          <span className="icon-line horizontal"></span>
          <span className="icon-line vertical"></span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="project-card-overlay">
        <div className="overlay-inner-content">
          <p className="project-description">{description}</p>
          
          <div className="project-meta">
            {techStack.length > 0 && (
              <div className="project-tech-stack">
                {techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            )}
            
            <div className="project-links">
              {projectUrl && (
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  <span>live project</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn github">
                  <span>github</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
