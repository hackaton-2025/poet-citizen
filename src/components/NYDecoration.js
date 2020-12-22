import treeSmileImage from '../images/form_christmas-tree.svg';
import giftSmileImage from '../images/form_gift.svg';

const NYDecoration = () => {
  return (
    <>
      <img src={treeSmileImage} alt="Эмоджи с ёлкой" className="ny-decor ny-decor_img_tree"></img>
      <img src={giftSmileImage} alt="Эмоджи с подарком" className="ny-decor ny-decor_img_gift"></img>
    </>
  );
};

export default NYDecoration;
