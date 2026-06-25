import React from 'react';
import './about.css';

const Experience = () => {
  const experiences = [
    {
      period: 'Apr 2026 - Present',
      company: 'Google Gemini',
      role: 'Campus Ambassador',
      description: "Building Google's AI dev community on campus through Gemini workshops and prompt engineering demos."
    },
    {
      period: 'Jan 2026 - June 2026',
      company: 'Atal Yuva Sansad',
      role: 'Secretariat Member',
      description: 'Supporting operations and coordination at a youth parliament in Gwalior, MP.'
    },
    {
      period: 'Sep 2025 - Nov 2025',
      company: 'Madhya Pradesh Youth Summit',
      role: 'Head of Photography',
      description: 'Directed a photography team across keynotes and panels, managing content selection and media delivery.'
    },
    {
      period: 'Jan 2025 - Jun 2025',
      company: 'Legatus Knowledge Services',
      role: 'Head of Photography',
      description: 'Scaled team to 70+, set visual direction across 4+ events, delivered 500+ images per event in 48hrs.'
    },
    {
      period: 'Dec 2023 - Dec 2024',
      company: 'Legatus Knowledge Services',
      role: 'Deputy Head of Photography',
      description: 'Co-led a 55-person team, cut re-editing requests by 30%, promoted to Head within 13 months.'
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
