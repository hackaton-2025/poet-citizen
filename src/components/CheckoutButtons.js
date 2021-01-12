import cn from 'classnames';
import prevIcon from '../images/prev-icon.svg';
import NextIcon from '../images/next-icon.svg';

const CheckoutButtons = ({
  isNextButtonActive,
  isPrevButton,
  onPrevButtonClick,
  onNextButtonClick,
  nextButtonType = 'button',
}) => {
  const nextButtonClassName = cn(
    'new-call__next-button',
    {'new-call__next-button_active': isNextButtonActive},
    {'new-call__next-button_disabled': !isNextButtonActive},
  );


  // Сделать main__content грид-контейнером, расположить элементы( заголовок, пагинацию, карточки, кнопку назад, кнопку вперед в грид-областях)
  // те области, которые скрываются (кнопки, пагинация) -- min-content
  // Стили для кнопки вперед: для неактивной new-call__next-button_disabled, для активной new-call__next-button_active, общие new-call__next-button
  
  return (
    <>
      { isPrevButton && (
        <button
          type="button"
          className="new-call__prev-button"
          onClick={onPrevButtonClick}
        >
          <img src={prevIcon} alt="Стрелка назад" className="new-call__button-img_type_prev"/> Назад
        </button>
      )}
      <button
        type="button"
        className={nextButtonClassName}
        onClick={onNextButtonClick}
        disabled={!isNextButtonActive}
      >
        { nextButtonType === "button" && <>{"Далее"} <img src={NextIcon} alt="Стрелка вперёд" className="new-call__button-img_type_next"/></> }
        { nextButtonType === "submit" && "Отправить" }
      </button>
    </>
  );
};

export default CheckoutButtons;
