import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import './project.css';

const projects = [
  {
    id: 1,
    category: 'Vasundhara',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1782326136/Screenshot_2026-06-25_000007_az6tsc.png',
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
    category: 'UniMap',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779727951/UM__UI_fpvu1d.png',
    description: "A campus navigation system designed to solve the problem of getting lost in large university campuses.",
    techStack: ['React', 'JavaScript', 'Figma', 'Vercel'],
    projectUrl: 'https://unimap-lemon.vercel.app/',
    githubUrl: 'https://github.com/dotrwt/UniMap'
  },
  {
    id: 4,
    category: 'Oak & Stay',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779728047/OaP_UI_evsb0m.png',
    description: "A property listing web app where users can discover and manage accommodations. Built as a learning project.",
    techStack: ['EJS', 'Express', 'MongoDB', 'Cloudinary', 'Render'],
    projectUrl: 'https://rentalmarketplace.onrender.com/',
    githubUrl: 'https://github.com/dotrwt/Oak-and-Stay'
  },
  {
    id: 5,
    category: 'Cinemyth',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779728057/CN_UI_rcqi6o.png',
    description: "A platform for people who think too much about movies. Goes beyond just listings or ratings it's about the stories, themes, and ideas that make films stick with you.",
    techStack: ['React', 'TypeScript', 'Figma', 'TailwindCSS', 'Vercel'],
    projectUrl: 'https://cinemyth.vercel.app/',
    githubUrl: 'https://github.com/dotrwt/Cinemyth'
  },
  {
    id: 6,
    category: 'Atal Yuva Sansad',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779739209/AYS_UI_n9rskn.png',
    description: "A youth parliament event held in Gwalior. Built to inform delegates about committees, agendas, and registration",
    techStack: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://dotrwt.github.io/AtalYuvaSansad/',
    githubUrl: 'https://github.com/dotrwt/AtalYuvaSansad'
  },
  {
    id: 7,
    category: 'Hexagon Travels',
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779739460/HT_UI_jmbrgx.png',
    description: "A travel agency website built to provide seamless travel experiences to customers",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://hexagontravels.com/',
    githubUrl: 'https://github.com/dotrwt/HexagonTravels-v2'
  },
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
