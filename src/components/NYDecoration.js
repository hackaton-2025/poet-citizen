import { useEffect, useRef } from 'react';
import treeSmileImage from '../images/form_christmas-tree.svg';
import giftSmileImage from '../images/form_gift.png';
import makeParallaxEffect from '../utils/makeParallaxEffect';
import throttle from '../utils/throttle';

const NYDecoration = () => {

  const decorRef = useRef({});  
  
  useEffect(() => {
    
    const handleMouseMove = (e) => throttle(makeParallaxEffect(e, decorRef.current), 3000);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  return (
    <div ref={node => (decorRef.current = node)} className="ny-decor">
      <img src={treeSmileImage} alt="Эмоджи с ёлкой" className="ny-decor__image ny-decor__image_content_tree" />
      <img src={giftSmileImage} alt="Эмоджи с подарком" className="ny-decor__image ny-decor__image_content_gift" />
    </div>
  );
};

export default NYDecoration;
