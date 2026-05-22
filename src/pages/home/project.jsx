import React from 'react';

const ProjectSection = () => {
  return (
    <section id="projects" className="home-section" style={{ minHeight: '50vh', padding: '4rem 0', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', width: '100%' }}>
        <div style={{ gridColumn: '2 / 8' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', textTransform: 'lowercase', marginBottom: '2rem' }}>
            selected projects
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
            placeholder for the projects section. we will design this in the next steps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
