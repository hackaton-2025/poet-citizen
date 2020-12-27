import { useEffect, useRef } from 'react';
import { makeThrottledParallax } from '../utils/parallaxEffect';

const Parallaxed = ({ elementToListen=window, children, multiplier = 10 }) => {

  const decorRef = useRef({}); 
  
  useEffect(() => {
    
    const handleMouseMove = (e) => makeThrottledParallax({
      e, elementRef: decorRef.current, ms: 3000, xMultiplier: multiplier
    });

    elementToListen.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      elementToListen.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  
  return (
    <div ref={node => (decorRef.current = node)} className="ny-decor">
     {children}
    </div>
  );
};

export default Parallaxed;
