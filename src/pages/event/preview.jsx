import React from 'react';
import GalleryCard from '../../components/GalleryCard';
import './event.css';

const EventPreview = ({ images }) => {
  if (!images || images.length === 0) return null;

  // Split images into 4 columns for the offset layout
  const columns = [[], [], [], []];
  images.forEach((image, index) => {
    columns[index % 4].push(image);
  });

  return (
    <section className="event-preview-section">
      <div className="event-preview-container">
        <div className="event-preview-header">
          <span className="text-mono event-preview-label">.selected shots</span>
          <div className="event-preview-line"></div>
        </div>
        
        <div className="event-staggered-grid">
          {columns.map((columnImages, colIndex) => (
            <div key={colIndex} className="event-grid-column">
              {columnImages.map((image, imgIndex) => {
                // Alternating portrait/landscape aspects
                const isLandscape = (colIndex + imgIndex) % 2 === 0;
                const aspectClass = isLandscape ? 'preview-landscape' : 'preview-portrait';
                return (
                  <GalleryCard 
                    key={imgIndex}
                    image={image}
                    className={`event-preview-card ${aspectClass}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPreview;
