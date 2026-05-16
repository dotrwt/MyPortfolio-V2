import { useEffect, useRef } from 'react';

/**
 * Custom hook that returns a ref. When the ref element enters the viewport,
 * the given callback fires once.
 */
export function useScrollAnimation(callback, threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback(el);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [callback, threshold]);

  return ref;
}
