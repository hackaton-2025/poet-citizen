import { useEffect } from "react";
import cn from 'classnames';

const Popup = ({
  isOpen,
  onClose,
  contentModificator,
  children,
  popupTitle,
  isRedirect=false,
  redirectText=''
}) => {

  const popupClassName = cn(
    'popup',
    { 'popup_show': isOpen, },
  );

  const popupContainerClassName = cn(
    'popup__container',
    { [contentModificator]: contentModificator, }
  );

  // Обработчик клика по оверлею
  const handleOverlayPopupClick = (evt) => {
    if (!evt.target.closest(".popup__container")) {
      onClose();
    }
  };

  // Обработчик нажатия клавиши "Escape"
  const handleEscape = (evt) => {
    if (evt.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleEscape);
    return () => {
      document.body.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={popupClassName} onMouseDown={handleOverlayPopupClick}>
      <div className={popupContainerClassName}>
        { !isRedirect && <button class="popup__close-btn" onClick={onClose}>&#10006;</button> }
        <h3 class="popup__title">{popupTitle}</h3>
        { children }
        { isRedirect && <button class="popup__link" onClick={onClose}>{redirectText}</button> }
      </div>
    </div>
  );
}

export default Popup;
