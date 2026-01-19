import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const useCountUp = (end, duration = 2000, suffix = '') => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '0px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      hasAnimated.current = false;
      return;
    }

    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric value from string (e.g., "50K+" -> 50, "85%" -> 85)
    const numericEnd = parseFloat(end.toString().replace(/[^0-9.]/g, ''));
    
    if (isNaN(numericEnd)) {
      setCount(end);
      return;
    }

    const startTime = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * numericEnd);
      
      setCount(currentCount);

      if (progress === 1) {
        clearInterval(timer);
        setCount(numericEnd);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  // Format the count with original suffix
  const formatCount = () => {
    const originalStr = end.toString();
    const suffix = originalStr.replace(/[0-9.]/g, '');
    return `${count}${suffix}`;
  };

  return [formatCount(), ref];
};

export default useCountUp;
