function NewsPopup({ news, onClose }) {
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
    <div className="popup popup_show">
      <div className="popup__content popup__content_news">
        <button className="popup__close-btn">&#10006;</button>
        <h3 className="popup__title">Новости</h3>
        <p className="popup__date">{news.date}</p>
        <p className="popup__subtitle">{news.title}</p>
        <p className="popup__text">{news.text}</p>
      </div>
    </div>
  );
}

export default NewsPopup;
