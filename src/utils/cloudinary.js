export const optimizeCloudinaryUrl = (url) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  // If it already has f_auto or q_auto, don't modify
  if (url.includes('f_auto') || url.includes('q_auto')) return url;
  
  // Insert /f_auto,q_auto/ before /v
  return url.replace(/\/upload\/v/, '/upload/f_auto,q_auto/v');
};
