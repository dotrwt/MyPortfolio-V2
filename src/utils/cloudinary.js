export const optimizeCloudinaryUrl = (url, width = 800) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  
  // Normalize the URL by removing existing transformations after /upload/ and before the version code /v[0-9]+/
  const uploadIndex = url.indexOf('/upload/');
  if (uploadIndex === -1) return url;
  
  const versionRegex = /\/v\d+\//;
  const match = url.match(versionRegex);
  
  if (match) {
    const versionIndex = match.index;
    const prefix = url.substring(0, uploadIndex + 8); // includes '/upload/'
    const suffix = url.substring(versionIndex); // includes '/vXXXXX/'
    return `${prefix}f_auto,q_auto:eco,w_${width},c_limit${suffix}`;
  }
  
  // Fallback for URLs without a version prefix
  return url.replace(/\/upload\//, `/upload/f_auto,q_auto:eco,w_${width},c_limit/`);
};
