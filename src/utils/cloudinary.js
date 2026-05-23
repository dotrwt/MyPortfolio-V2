export const optimizeCloudinaryUrl = (url, width = 800) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  // If it already has f_auto or q_auto, don't modify
  if (url.includes('f_auto') || url.includes('q_auto')) return url;
  
  // Insert /f_auto,q_auto,w_{width},c_limit/ before /v
  return url.replace(/\/upload\/v/, `/upload/f_auto,q_auto,w_${width},c_limit/v`);
};
