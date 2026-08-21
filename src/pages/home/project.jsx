import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import BorderGlow from '../../components/borderglow/borderglow.jsx';

const projects = [
  {
    id: 1,
    category: 'UniMap',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1786899363/Screenshot_2026-08-16_222429_l4skuh.png',
    description: "A campus navigation system designed to solve the problem of getting lost in large university campuses.",
    techStack: ['React', 'TypeScript', 'Framer', 'Vercel'],
    projectUrl: 'https://unimap.dotrwt.in',
    githubUrl: 'https://github.com/dotrwt/UniMap-V2'
  },
  {
    id: 2,
    category: 'Zest Trading',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1780427159/UI__11_nvg7cr.png',
    description: 'A full-stack paper trading platform for managing virtual portfolios, executing simulated trades, and tracking market performance.',
    techStack: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
    ],
    projectUrl: 'https://zest-amber-psi.vercel.app/',
    githubUrl: 'https://github.com/dotrwt/ZestTrading'
  },
  {
    id: 3,
    category: 'Vasundhara',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1787293564/Screenshot_2026-08-21_115523_iu4xgj.png',
    description: 'Vasundhara is a land registry and auditing portal that simplifies enrolling citizens, managing land records, and generating audit reports — all in one place.',
    techStack: [
      'React',
      'Vite',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
    ],
    projectUrl: 'https://vlms.dotrwt.in/',
    githubUrl: 'https://github.com/dotrwt/Vasundhara'
  },
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
