function DialogPopup({ news, onClose }) {
  // Обработчик клика по оверлею
  const handleOverlayPopupClick = (evt) => {
    if (!evt.target.closest(".popup")) {
      // здесь функция закрытия popup
      // открывает popup класс popup_show
    }
  };

  // Обработчик нажатия клавиши "Escape"
  const handleEscape = (evt) => {
    if (evt.key === "Escape") {
      // здесь функция закрытия popup
      // открывает popup класс popup_show
    }
  };

  const btnCloseClick = (evt) => {
    if (evt.target.contains("popup__close-btn")) {
      // здесь функция закрытия popup
      // открывает popup класс popup_show
    }
  };

  return (
    <div class="popup popup_show">
      <div class="popup__content popup__content_dialog">
        <h3 class="popup__title popup__title_dialog">
          Ваша заявка успешно отправлена!
        </h3>
        <a href="" class="popup__link">
          Все заявки
        </a>
      </div>
    </div>
  );
}

export default DialogPopup;
