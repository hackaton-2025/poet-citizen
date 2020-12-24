function NewsPopup(props) {
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
    if (evt.target.classList.contains("popup__close-btn")) {
      console.log("22");
      props.close();
    }
  };

  if (props.show) {
    return (
      <div className="popup popup_show">
        <div className="popup__content popup__content_news">
          <button className="popup__close-btn" onClick={btnCloseClick}>
            &#10006;
          </button>
          <h3 className="popup__title">Новости</h3>
          <p className="popup__date">{props.date}</p>
          <p className="popup__subtitle">{props.title}</p>
          <p className="popup__text">{props.text}</p>
        </div>
      </div>
    );
  } else return null;
}

export default NewsPopup;
