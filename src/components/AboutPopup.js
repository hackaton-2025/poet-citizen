import Popup from "./Popup";
import team1 from "../images/emoji/team1.svg";
import team2 from "../images/emoji/team2.svg";

const AboutPopup = ({ isOpen, onClose }) => {

  return (
    <Popup
      contentModificator="popup__container_content_about"
      isOpen={isOpen}
      onClose={onClose}
      popupTitle="О проекте"
    >
      <p className="popup__text popup__text_team">
        ОБЭРИУ – приложение для подачи экспресс заявок на проведение работ по
        благоустройству и обслуживанию объектов жилых комплексов.
        <br />
        <br />
        Цель проекта – позволить жителям экономить их время и максимально
        просто, быстро и удобно оставлять запрос на благоустройство/
        обслуживание в случае возникновения проблемы.
      </p>
      <h3 className="popup__title popup__title_team">Команда</h3>
      <img className="popup__smiles" src={team1} alt="эмодзи"></img>
      <p className="popup__subtext">
        Веб-разработчики:
        <br />
        Юлия Дорошина, Николай Смирнов, Алексей Обрядин
      </p>
      <img className="popup__smiles" src={team2} alt="эмодзи"></img>
      <p className="popup__subtext">
        Дизайнеры:
        <br />
        Матвей Граб, Полина Родина, Алина Меркурьева
      </p>
    </Popup>
  );
}

export default AboutPopup;
