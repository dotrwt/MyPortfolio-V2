import React from 'react';
import '../pages/gallery/gallery.css';

const GalleryCard = ({ image }) => {
  return (
    <div className="gallery-card">
      <div 
        className="gallery-card-bg" 
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};

export default GalleryCard;
