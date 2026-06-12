import React, { useState, useEffect } from 'react';
import GalleryCard from '../../components/GalleryCard';
import './event.css';

const EventPreview = ({ images }) => {
  const [columnCount, setColumnCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 600) {
        setColumnCount(1);
      } else if (w < 900) {
        setColumnCount(2);
      } else if (w < 1200) {
        setColumnCount(3);
      } else {
        setColumnCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!images || images.length === 0) return null;

  // Dynamically divide images into the active column count
  const columns = Array.from({ length: columnCount }, () => []);
  images.forEach((image, index) => {
    columns[index % columnCount].push(image);
  });

  return (
    <section className="event-preview-section">
      <div className="event-preview-container">
        <div className="event-preview-header">
          <span className="text-mono event-preview-label">.selected shots</span>
          <div className="event-preview-line"></div>
        </div>
        
        <div className={`event-staggered-grid cols-${columnCount}`}>
          {columns.map((columnImages, colIndex) => (
            <div key={colIndex} className="event-grid-column">
              {columnImages.map((image, imgIndex) => {
                // Use the explicit aspect property to set the correct class
                const aspectClass = image.aspect === 'landscape' ? 'preview-landscape' : 'preview-portrait';
                return (
                  <GalleryCard 
                    key={imgIndex}
                    image={image.url}
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
