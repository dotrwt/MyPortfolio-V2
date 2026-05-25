import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import './project.css';

// Import local project assets (generated mockups)
import projectAbc from '../../assets/project_abc.png';
import projectAllForOne from '../../assets/project_allforone.png';
import projectTablet from '../../assets/project_tablet.png';

const projects = [
  {
    id: 1,
    category: 'UniMap',
    image: projectAbc,
    description: "I provide creative leadership to ensure your brand's visuals, photography, and campaigns align beautifully with your identity, guiding every detail for a cohesive, polished result.",
    techStack: ['Figma', 'Illustrator', 'Cinema 4D'],
    projectUrl: 'https://unimap-lemon.vercel.app/',
    githubUrl: 'https://github.com/dotrwt/UniMap'
  },
  {
    id: 2,
    category: 'Oak & Stay',
    image: projectAllForOne,
    description: "Developing comprehensive brand identities and positioning strategies that build emotional connection and establish market authority for series A-D startups.",
    techStack: ['Research', 'Brand Book', 'Copywriting'],
    projectUrl: 'https://rentalmarketplace.onrender.com/',
    githubUrl: 'https://github.com/dotrwt/Oak-and-Stay'
  },
  {
    id: 3,
    category: 'Cinemyth',
    image: projectTablet,
    description: "High-fidelity digital experiences crafted with interaction, sleek animations, and custom layouts that keep users engaged and tell a compelling product story.",
    techStack: ['Figma', 'React', 'TypeScript'],
    projectUrl: 'https://cinemyth.vercel.app/',
    githubUrl: 'https://github.com/dotrwt/cinemyth'
  },
  {
    id: 4,
    category: 'Atal Yuva Sansad',
    image: projectAbc,
    description: "I provide creative leadership to ensure your brand's visuals, photography, and campaigns align beautifully with your identity, guiding every detail for a cohesive, polished result.",
    techStack: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://dotrwt.github.io/AtalYuvaSansad/',
    githubUrl: 'https://github.com/dotrwt/AtalYuvaSansad'
  },
  {
    id: 5,
    category: 'Hexagon Travels - v2',
    image: projectAllForOne,
    description: "Developing comprehensive brand identities and positioning strategies that build emotional connection and establish market authority for series A-D startups.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://hexagontravels.com/',
    githubUrl: 'https://github.com/dotrwt/HexagonTravels-v2'
  },
  {
    id: 6,
    category: 'Hexagon Travels - v3',
    image: projectTablet,
    description: "High-fidelity digital experiences crafted with interaction, sleek animations, and custom layouts that keep users engaged and tell a compelling product story.",
    techStack: ['React', 'WebGL', 'GSAP', 'CSS Grid'],
    projectUrl: 'https://example.com/digital',
    githubUrl: 'https://github.com'
  },
  {
    id: 7,
    category: 'My Portfolio - v1',
    image: projectTablet,
    description: "High-fidelity digital experiences crafted with interaction, sleek animations, and custom layouts that keep users engaged and tell a compelling product story.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://harshvardhanrawat.dev',
    githubUrl: 'https://github.com/dotrwt/MyPortfolio-V1'
  }
];

const ProjectsGallery = () => {
  return (
    <section className="projects-gallery-section">
      <div className="projects-gallery-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            image={project.image}
            description={project.description}
            techStack={project.techStack}
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;
