import "./styles.css";
import plungerLogo from "../../images/create_call_plunger.svg";
import cockroachLogo from "../../images/create_call_cockroach.svg";
import heatLogo from "../../images/create_call_heat.svg";
import floodLogo from "../../images/create_call_flood.svg";
import lampLogo from "../../images/create_call_lamp.svg";
import frozeLogo from "../../images/create_call_froze.svg";
import craneLogo from "../../images/create_call_crane.svg";
import flashLogo from "../../images/create_call_flash.svg";
import doorphoneLogo from "../../images/create_call_doorphone.svg";
import adLogo from "../../images/create_call_ad.svg";
import graffitiLogo from "../../images/create_call_graffiti.svg";
import mopLogo from "../../images/create_call_mop.svg";
import smellLogo from "../../images/create_call_smell.svg";
import trashLogo from "../../images/create_call_trash.svg";
import elevatorLogo from "../../images/create_call_elevator.svg";
import otherLogo from "../../images/create_call_other.svg";
import iceLogo from "../../images/create_call_ice.svg";
import snowLogo from "../../images/create_call_snow.svg";
import treeLogo from "../../images/create_call_tree.svg";
import angryLogo from "../../images/create_call_angry.svg";
import disappointmentLogo from "../../images/create_call_disappointment.svg";

const NewCall = () => {
  return (
    <div className="page-container">
      <div className="page-container__content">
        <header className="header">
          <div className="logo"></div>
          <div className="header__user-profile">
            <a href="#" className="header__user-profile-enter">
              nikerfe@gmail.com
            </a>
            <button
              type="submit"
              className="header__user-profile-logout"
            ></button>
          </div>
        </header>
        <section className="content">
          <nav className="navigation">
            <ul className="navigation__item-list">
              <li className="navigation__item">
                <a href="#" className="navigation__item-link">
                  <div className="navigation__item-image navigation__item-image_type_user-calls"></div>
                  <p className="navigation__item-title">Заявка</p>
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__item-link">
                  <div className="navigation__item-image navigation__item-image_type_new-call"></div>
                  <p className="navigation__item-title">Оставить обращение</p>
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__item-link">
                  <div className="navigation__item-image navigation__item-image_type_profile"></div>
                  <p className="navigation__item-title">Профиль</p>
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__item-link">
                  <div className="navigation__item-image navigation__item-image_type_profile"></div>
                  <p className="navigation__item-title">О проекте</p>
                </a>
              </li>
            </ul>
          </nav>
          <section className="requests">
            <template id="requests__null">
              <div className="requests__null">
                <h1 className="requests__title requests__title_null">
                  Нет ни одной заявки в работе :(
                </h1>
                <p className="requests__subtitle">
                  Составьте обращение - здесь появится информация по вашей
                  заявке
                </p>
              </div>
            </template>
            <div className="requests__list">
              <h1 className="requests__title">Ваши заявки:</h1>
              <div className="requests__item">
                <div className="requests__header">
                  <p className="requests__name">&#129314; &#129314;</p>
                  <p className="requests__status">Заявка обрабатывается</p>
                </div>
                <p className="requests__text">
                  Тогда услышал я (о диво!) запах скверный, Как будто тухлое
                  разбилось яицо, Иль карантинный страж курил жаровней серной.
                  Я, нос себе зажав, отворотил лицо.
                </p>
                <p className="requests__date">
                  Обращение составлено: 12.03.19 – 12:33
                </p>
              </div>
            </div>
          </section>
        </section>
        <footer className="footer"></footer>
      </div>
    </div>
  );
};

export default NewCall;
