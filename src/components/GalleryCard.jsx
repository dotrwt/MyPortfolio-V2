import React from 'react';
import { optimizeCloudinaryUrl } from '../utils/cloudinary';
import '../pages/gallery/gallery.css';

const GalleryCard = ({ image, className = '' }) => {
  const optimizedImage = optimizeCloudinaryUrl(image);

  return (
    <div className={`gallery-card ${className}`.trim()}>
      <img 
        src={optimizedImage}
        alt="Gallery Item"
        loading="lazy"
        className="gallery-card-bg" 
      />
    </div>
  );
};

export default GalleryCard;
