import cn from 'classnames';
import { useEffect, useState } from "react";

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

  const loadEmoji = () => {
    import(`../images/emoji/${imageCode}.png`)
      .then((image) => {
        setEmogi(image.default);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadEmoji();
  }, []);

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(cardTitle);
    }
  };

  const renderPoem = (poem) => {
    const textArray = poem.split('\n')
    return textArray.map((line, i) => (
      <p key={i} className='card__poem-line'>{line}</p>
    ));
  }

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
            { emojiUrl && <img src={emojiUrl} alt="Эмоджи" className="card__emoji" /> }
            <p className="card__title">{cardTitle}</p>
            {/* TODO -- предусмотреть в стилях троеточие при переполнении */}
            { cardAddress && <p className="card__paragrarh card__paragraph_type_address">{cardAddress}</p> }
            { cardPoem &&  renderPoem(cardPoem) }
            { cardSign && <p className="card__signature">{cardSign}</p> }
            { cardPromise && <p className="card__paragraph card__paragraph_type_promise">{cardPromise}</p> }
          </div>
        )
      }
    </>
  );
};

export default Card;
