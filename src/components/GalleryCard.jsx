import React from 'react';
import { optimizeCloudinaryUrl } from '../utils/cloudinary';
import '../pages/gallery/gallery.css';

const GalleryCard = ({ image, className = '', alt = 'Gallery Artwork' }) => {
  const optimizedImage = optimizeCloudinaryUrl(image);

  return (
    <div className={`gallery-card ${className}`.trim()}>
      <img 
        src={optimizedImage}
        alt={alt}
        loading="lazy"
        className="gallery-card-bg" 
      />
    </div>
  );
};

export default GalleryCard;
