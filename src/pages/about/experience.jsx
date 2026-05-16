import React from 'react';
import './about.css';

const Experience = () => {
  const experiences = [
    {
      period: 'Apr 2026 - Present',
      company: 'Google Gemini',
      role: 'Campus Ambassador',
      description: 'Spearhead the design direction and strategy for a range of cutting-edge products.'
    },
    {
      period: '2019 - 2021',
      company: 'EFG Solutions',
      role: 'Product Design Manager',
      description: 'Managed a team of designers and coordinated design projects across multiple products.'
    },
    {
      period: 'Sep 2025 - Nov 2025',
      company: 'Madhya Pradesh Youth Summit',
      role: 'Head of Photography',
      description: 'Oversaw the entire product design lifecycle from concept to production.'
    },
    {
      period: 'Jan 2025 - Jun 2025',
      company: 'Legatus Knowledge Services',
      role: 'Head of Photography',
      description: 'Led a team of designers in creating visually appealing and functional product designs.'
    },
    {
      period: 'Dec 2023 - Dec 2024',
      company: 'Legatus Knowledge Services',
      role: 'Head of Photography',
      description: 'Collaborated with cross-functional teams to design and develop innovative products.'
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <span className="experience-label">.work experience</span>
          <div className="experience-line"></div>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-period">
                {exp.period}
              </div>
              <div className="experience-details">
                <h3 className="experience-company">{exp.company}</h3>
                <p className="experience-role">{exp.role}</p>
              </div>
              <div className="experience-description">
                {exp.description}
              </div>
              
              <div className="experience-row-divider">
                <div className="divider-line"></div>
                <div className="experience-target">
                  <div className="target-inner"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
