import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './preloader.css';

const Preloader = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Trigger exit animation after 2.0 seconds
    const timer = setTimeout(() => {
      setIsComplete(true);
      // Wait for exit animation to finish before unmounting completely
      setTimeout(() => {
        setIsMounted(false);
        if (onComplete) onComplete();
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isMounted) return null;

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { 
        duration: 2, 
        ease: [0.45, 0, 0.15, 1],
        delay: 0.5 
      } 
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.4, ease: "backOut", delay: 0.2 } 
    }
  };

  const crossVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 0.4, ease: "easeOut", delay: 2.3 } 
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div 
          className="preloader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <svg className="preloader-svg" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="signature-text"
            >
              .rwt
            </text>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
