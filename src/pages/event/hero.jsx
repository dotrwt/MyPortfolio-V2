import React from 'react';
import './event.css';

const EventHero = ({ title, date, venue }) => {
  return (
    <section className="event-hero">
      <div className="event-hero-content-grid">
        {/* Title and Category Section */}
        <div className="event-hero-header-wrapper fade-in">
          <div className="event-hero-title-container">
            <span className="text-mono event-hero-tag">.photography showcase</span>
            <h1 className="event-hero-title">{title}</h1>
          </div>
          
          <div className="event-hero-icon-wrapper">
            <div className="event-hero-icon">
              <div className="line"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>

        {/* Details Meta Grid */}
        <div className="event-hero-meta-grid slide-up">
          <div className="event-meta-column">
            <div className="event-meta-block">
              <span className="text-mono meta-label">date</span>
              <span className="meta-value">{date}</span>
            </div>
            <div className="event-meta-block">
              <span className="text-mono meta-label">venue</span>
              <span className="meta-value">{venue}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
