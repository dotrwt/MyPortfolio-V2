import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import BorderGlow from '../../components/borderglow/borderglow.jsx';

const projects = [
  {
    id: 1,
    category: 'UniMap',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779727951/UM__UI_fpvu1d.png',
    description: "A student-focused campus navigation system designed to solve the problem of getting lost in large university campuses. It allows users to search for rooms using building names, floor numbers, landmarks, or digital identifiers and provides clear, structured directions for easy navigation.",
    techStack: ['React', 'JavaScript', 'Figma', 'Vercel'],
    projectUrl: 'https://unimap-lemon.vercel.app/',
    githubUrl: 'https://github.com/dotrwt/unimap'
  },
  {
    id: 2,
    category: 'Oak & Stay',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779728047/OaP_UI_evsb0m.png',
    description: "A property listing web app where users can discover and manage accommodations. Built as a learning project to get hands-on with full-stack development, auth, databases, image uploads, the works.",
    techStack: ['EJS', 'Express', 'MongoDB', 'Cloudinary', 'Render'],
    projectUrl: 'https://rentalmarketplace.onrender.com/',
    githubUrl: 'https://github.com/dotrwt/Oak-and-Stay'
  },
  {
    id: 3,
    category: 'Cinemyth',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779728057/CN_UI_rcqi6o.png',
    description: "A platform for people who think too much about movies. Goes beyond just listings or ratings it's about the stories, themes, and ideas that make films stick with you.",
    techStack: ['React', 'TypeScript', 'Figma', 'TailwindCSS', 'Vercel'],
    projectUrl: 'https://cinemyth.vercel.app/',
    githubUrl: 'https://github.com/dotrwt/Cinemyth'
  }
];

const ProjectSection = () => {
  return (
    <section id="projects" className="home-section projects-sticky-section">
      <div className="projects-grid">

        {/* Top Label */}
        <div className="project-header">
          <span className="project-label">.projects</span>
          <div className="project-line"></div>
        </div>

        {/* Left Side: Sticky Text Content */}
        <div className="projects-sticky-left">
          <div className="projects-sticky-content">
            <h2 className="projects-title">
              selected<br />projects
            </h2>
            <p className="projects-description">
              A curated selection of projects focused on thoughtful design, seamless experiences, and purposeful development.
            </p>
            <div className="projects-btn-group">
              <BorderGlow borderRadius={0} backgroundColor="#000" glowRadius={30} className="btn-glow-wrapper">
                <Link to="/projects" className="projects-btn">
                  all projects ↗
                </Link>
              </BorderGlow>
            </div>
          </div>
        </div>

        {/* Right Side: Scrolling Project Cards */}
        <div className="projects-scroll-right">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="project-scroll-item sticky-card"
              style={{
                '--card-index': index
              }}
            >
              <ProjectCard
                category={proj.category}
                title={proj.title}
                image={proj.image}
                description={proj.description}
                techStack={proj.techStack}
                projectUrl={proj.projectUrl}
                githubUrl={proj.githubUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
