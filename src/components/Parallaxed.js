import { useEffect, useRef } from 'react';
import { makeThrottledParallax } from '../utils/parallaxEffect';

const Parallaxed = ({children}) => {

  const decorRef = useRef({}); 
  
  useEffect(() => {
    
    const handleMouseMove = (e) => makeThrottledParallax(e, decorRef.current, 3000);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  
  return (
    <div ref={node => (decorRef.current = node)} className="ny-decor">
     {children}
    </div>
  );
};

export default Parallaxed;
