import cn from 'classnames';
import { useEffect, useState } from "react";

const Card = ({
  imageCode,
  cardTitle,
  cardText,
  cardSign,
  cardPoem,
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
    console.log(imageCode)
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
    console.log(poem)
    console.log(cardClassName)
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
            { cardText && <p className="card__paragrarh">{cardText}</p> }
            { cardPoem &&  renderPoem(cardPoem) }
            { cardSign && <p className="card__signature">{cardSign}</p> }
          </div>
        )
      }
    </>
  );
};

export default Card;
