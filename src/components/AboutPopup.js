function AboutPopup({ news, onClose }) {
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
      <div class="popup__content popup__content_about">
        <button class="popup__close-btn">&#10006;</button>
        <h3 class="popup__title">О проекте</h3>
        <p class="popup__text popup__text_team">
          ОБЭРИУ – приложение для подачи экспресс заявок на проведение работ по
          благоустройству и обслуживанию объектов жилых комплексов.
          <br />
          <br />
          Цель проекта – позволить жителям экономить их время и максимально
          просто, быстро и удобно оставлять запрос на благоустройство/
          обслуживание в случае возникновения проблемы.
        </p>
        <h3 class="popup__title popup__title_team">Команда</h3>
        <p class="popup__smiles">
          &#128113;&#8205;&#9792;&#65039; &#129489;
          &#128113;&#8205;&#9794;&#65039;
        </p>
        <p class="popup__subtext">
          Веб-разработчики:
          <br />
          Юлия Дорошина, Николай Смирнов, Алексей Обрядин
        </p>
        <p class="popup__smiles">
          &#129489; &#128105;&#8205;&#129459; &#128105;&#8205;&#129456;
        </p>
        <p class="popup__subtext">
          Дизайнеры:
          <br />
          Матвей Граб, Полина Родина, Алина Меркурьева
        </p>
      </div>
    </div>
  );
}

export default AboutPopup;
