import { useEffect } from 'react';

const useSEO = ({ title, description, canonicalUrl, image, robots }) => {
  useEffect(() => {
    // 1. Update Title
    let formattedTitle = 'Harshvardhan Rawat (dotrwt) | Portfolio & Developer';
    if (title) {
      const lowerTitle = title.toLowerCase().trim();
      if (lowerTitle === 'home') {
        formattedTitle = 'Harshvardhan Rawat (dotrwt) | Portfolio & Full-Stack Developer';
      } else if (lowerTitle === 'about' || lowerTitle === 'about / bio') {
        formattedTitle = 'about - dotrwt | Harshvardhan Rawat';
      } else if (lowerTitle === 'projects' || lowerTitle === 'work & selected projects') {
        formattedTitle = 'projects - dotrwt | Harshvardhan Rawat';
      } else if (lowerTitle === 'gallery' || lowerTitle === 'visual gallery') {
        formattedTitle = 'gallery - dotrwt | Harshvardhan Rawat';
      } else if (lowerTitle === 'contact') {
        formattedTitle = 'contact - dotrwt | Harshvardhan Rawat';
      } else {
        formattedTitle = `${title} - dotrwt | Harshvardhan Rawat`;
      }
    }
    document.title = formattedTitle;

    // Helper function to update meta tag content
    const updateMeta = (selector, value) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', value);
      } else {
        // If meta tag doesn't exist, create it
        const isProperty = selector.includes('property');
        const attrName = isProperty ? 'property' : 'name';
        const attrValue = selector.match(/"([^"]+)"/)[1];
        
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        element.setAttribute('content', value);
        document.head.appendChild(element);
      }
    };

    // 2. Update Description
    if (description) {
      updateMeta('meta[name="description"]', description);
      updateMeta('meta[property="og:description"]', description);
      updateMeta('meta[property="twitter:description"]', description);
    }

    // 3. Update OG/Twitter Title
    updateMeta('meta[property="og:title"]', formattedTitle);
    updateMeta('meta[property="twitter:title"]', formattedTitle);

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    const cleanUrl = window.location.origin + window.location.pathname;
    const currentUrl = canonicalUrl || cleanUrl;
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', currentUrl);
      document.head.appendChild(canonical);
    }

    // 5. Update OG URL
    updateMeta('meta[property="og:url"]', currentUrl);
    updateMeta('meta[property="twitter:url"]', currentUrl);

    // 6. Update OG/Twitter Image
    if (image) {
      const fullImageUrl = image.startsWith('http')
        ? image
        : `${window.location.origin}${image.startsWith('/') ? '' : '/'}${image}`;
      updateMeta('meta[property="og:image"]', fullImageUrl);
      updateMeta('meta[property="twitter:image"]', fullImageUrl);
      updateMeta('meta[name="twitter:image"]', fullImageUrl);
    }

    // 7. Update Robots
    updateMeta('meta[name="robots"]', robots || 'index, follow');
  }, [title, description, canonicalUrl, image, robots]);
};

export default useSEO;
