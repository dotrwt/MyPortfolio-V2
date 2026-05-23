import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import BorderGlow from '../../components/borderglow/borderglow.jsx';

// Import local project assets
import projectAbc from '../../assets/project_abc.png';
import projectAllForOne from '../../assets/project_allforone.png';
import projectTablet from '../../assets/project_tablet.png';

const projects = [
  {
    id: 1,
    category: 'UniMap',
    image: projectAbc,
    description: "I provide creative leadership to ensure your brand's visuals, photography, and campaigns align beautifully with your identity.",
    techStack: ['React', 'Figma'],
    projectUrl: 'https://unimap-lemon.vercel.app/',
    githubUrl: 'https://github.com/dotrwt/unimap'
  },
  {
    id: 2,
    category: 'Brand Strategy',
    image: projectAllForOne,
    description: "Developing comprehensive brand identities and positioning strategies that build emotional connection and establish market authority.",
    techStack: ['Research', 'Brand Book', 'Copywriting'],
    projectUrl: 'https://example.com/brand-strategy',
    githubUrl: 'https://github.com'
  },
  {
    id: 3,
    category: 'Digital',
    image: projectTablet,
    description: "High-fidelity digital experiences crafted with interaction, sleek animations, and custom layouts that keep users engaged.",
    techStack: ['React', 'WebGL', 'GSAP'],
    projectUrl: 'https://example.com/digital',
    githubUrl: 'https://github.com'
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
                <button className="projects-btn">
                  all projects ↗
                </button>
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
                position: 'sticky',
                top: `calc(15vh + ${index * 80}px)`,
                zIndex: index + 1
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
