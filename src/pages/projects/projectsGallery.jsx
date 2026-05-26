import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import './project.css';

const projects = [
  {
    id: 1,
    category: 'UniMap',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779727951/UM__UI_fpvu1d.png',
    description: "A campus navigation system designed to solve the problem of getting lost in large university campuses.",
    techStack: ['React', 'JavaScript', 'Figma', 'Vercel'],
    projectUrl: 'https://unimap-lemon.vercel.app/',
    githubUrl: 'https://github.com/dotrwt/UniMap'
  },
  {
    id: 2,
    category: 'Oak & Stay',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779728047/OaP_UI_evsb0m.png',
    description: "A property listing web app where users can discover and manage accommodations. Built as a learning project.",
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
  },
  {
    id: 4,
    category: 'Atal Yuva Sansad',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779739209/AYS_UI_n9rskn.png',
    description: "A youth parliament event held in Gwalior. Built to inform delegates about committees, agendas, and registration",
    techStack: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://dotrwt.github.io/AtalYuvaSansad/',
    githubUrl: 'https://github.com/dotrwt/AtalYuvaSansad'
  },
  {
    id: 5,
    category: 'Hexagon Travels - v2',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779739460/HT_UI_jmbrgx.png',
    description: "A travel agency website built to provide seamless travel experiences to customers",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://hexagontravels.com/',
    githubUrl: 'https://github.com/dotrwt/HexagonTravels-v2'
  },
  {
    id: 6,
    category: 'Hexagon Travels - v3',
    image: '',
    description: "High-fidelity digital experiences crafted with interaction, sleek animations, and custom layouts that keep users engaged and tell a compelling product story.",
    techStack: ['React', 'WebGL', 'GSAP', 'CSS Grid'],
    projectUrl: 'https://example.com/digital',
    githubUrl: 'https://github.com'
  },
  {
    id: 7,
    category: 'My Portfolio - v1',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779739686/MP_UI_hcu1qt.png',
    description: "First version of a portfolio website built to showcase my projects and skills",
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
