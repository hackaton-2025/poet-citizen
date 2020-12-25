import cn from 'classnames';
import { useEffect, useState } from "react";
import loadImage from '../utils/loadImage';
import renderPoem from '../utils/renderPoem';

const Card = ({
  imageCode,
  cardTitle,
  cardAddress,
  cardSign,
  cardPoem,
  cardPromise,
  sizeModificator,
  onCardClick = null,
  checkedCard,
}) => {
  const cardClassName = cn(
    'card',
    {
      [sizeModificator]: sizeModificator,
      'card_type_button': onCardClick,
      'card_type_not-button': !onCardClick,
      'card_checked': checkedCard === cardTitle,
      'card_unchecked': checkedCard !== cardTitle,
    }
  );

  const [emojiUrl, setEmogi] = useState(null);

  // const loadEmoji = () => {
  //   import(`../images/emoji/${imageCode}.png`)
  //     .then((image) => {
  //       setEmogi(image.default);
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    loadImage(imageCode, setEmogi);
  }, []);


  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(cardTitle);
    }
  };

  return (
    <>
      { onCardClick
        ? (
          <button type="button" className={cardClassName} onClick={handleCardClick}>
            <img src={emojiUrl} alt="Эмоджи" className="card__emoji" />
            <p className="card__title">{cardTitle}</p>
          </button>
        ) : (
          <div className={cardClassName}>
            <p className="card__title card__title_type_final">{cardTitle}</p>
            { emojiUrl && <img src={emojiUrl} alt="Эмоджи" className="card__emoji" /> }
            {/* TODO -- предусмотреть в стилях троеточие при переполнении */}
            { cardAddress && <p className="card__paragrarh card__paragraph_type_address">{cardAddress}</p> }
            { cardPoem &&  renderPoem(cardPoem, 'card__poem-line') }
            { cardSign && <p className="card__signature">{cardSign}</p> }
            { cardPromise && <p className="card__paragraph card__paragraph_type_promise">{cardPromise}</p> }
          </div>
        )
      }
    </>
  );
};

export default Card;
