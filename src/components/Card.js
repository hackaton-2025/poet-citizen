import cn from 'classnames';
import { useEffect, useState } from "react";

const Card = ({ imageCode, cardTitle, sizeModificator }) => {
  const cardClassName = cn('card', {[sizeModificator]: sizeModificator});

  const [emojiUrl, setEmogi] = useState(null);

  const loadEmoji = () => {
    import(`../images/emoji/${imageCode}.png`)
      .then((image) => {
        setEmogi(image.default);
      }).then(_ => console.log(emojiUrl))
  }

  useEffect(() => {
    loadEmoji();
  }, []);

  return (
    <button type="button" className={cardClassName}>
      <img src={emojiUrl} alt="Эмоджи" className="card__emoji" />
      <p className="card__title">{cardTitle}</p>
    </button>
  );
};

export default Card;
