import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyRender component that uses IntersectionObserver to defer rendering of heavy elements.
 */
const LazyRender = ({ children, minHeight = '520px', className = '' }) => {
  const [isIntersected, setIsIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.unobserve(el);
        }
      },
      { 
        rootMargin: '200px 0px', // Pre-render 200px before scrolling into viewport
        threshold: 0.01 
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minHeight: !isIntersected ? minHeight : undefined,
      }}
    >
      {isIntersected ? children : null}
    </div>
  );
};

export default LazyRender;
