import { Link } from "react-router-dom";
import team1 from "../images/emoji/team1.svg";
import team2 from "../images/emoji/team2.svg";

const About = () => {
  return(
    <div className="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__item-container">
        <div className="about__item">
          <p className="about__text">
            ОБЭРИУ – приложение для подачи экспресс заявок на проведение работ по благоустройству и обслуживанию объектов жилых комплексов.
            <br />
            <br />
            Цель проекта – позволить жителям экономить их время и максимально просто, быстро и удобно оставлять запрос на благоустройство/обслуживание в случае возникновения проблемы или предложения по благоустройству.
          </p>
        </div>
        <div className="about__item">
          <h3 className="about__subtitle">Команда</h3>
          <img className="about__emoji" src={team1}></img>
          <p className="about__text">Веб-разработчики:<br />Юлия Дорошина, Николай Смирнов, Алексей Обрядин</p>
          <img className="about__emoji" src={team2}></img>
          <p className="about__text">Дизайнеры:<br />Матвей Граб, Полина Родина, Алина Меркурьева</p>
        </div>
      </div>
    </div>
  )
};

export default About;
