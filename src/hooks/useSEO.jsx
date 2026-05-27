import { useEffect } from 'react';

const useSEO = ({ title, description, canonicalUrl }) => {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title ? `${title} // dotrwt` : 'dotrwt // Portfolio';
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
    const currentUrl = canonicalUrl || window.location.href;
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
  }, [title, description, canonicalUrl]);
};

export default useSEO;
