import { useEffect } from "react";
import cn from 'classnames';
import team1 from "../images/emoji/team1.svg";
import team2 from "../images/emoji/team2.svg";

function AboutPopup({ isOpen, onClose, contentModificator }) {

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
    <div class={popupClassName} onMouseDown={handleOverlayPopupClick}>
      <div class={popupContainerClassName}>
        <button class="popup__close-btn" onClick={onClose}>&#10006;</button>
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
        <img class="popup__smiles" src={team1}></img>
        <p class="popup__subtext">
          Веб-разработчики:
          <br />
          Юлия Дорошина, Николай Смирнов, Алексей Обрядин
        </p>
        <img class="popup__smiles" src={team2}></img>
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
