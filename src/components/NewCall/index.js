import './styles.css';
import plungerLogo from '../../images/create_call_plunger.svg';
import cockroachLogo from '../../images/create_call_cockroach.svg';
import heatLogo from '../../images/create_call_heat.svg';
import floodLogo from '../../images/create_call_flood.svg';
import lampLogo from '../../images/create_call_lamp.svg';
import frozeLogo from '../../images/create_call_froze.svg';
import craneLogo from '../../images/create_call_crane.svg';
import flashLogo from '../../images/create_call_flash.svg';
import doorphoneLogo from '../../images/create_call_doorphone.svg';
import adLogo from '../../images/create_call_ad.svg';
import graffitiLogo from '../../images/create_call_graffiti.svg';
import mopLogo from '../../images/create_call_mop.svg';
import smellLogo from '../../images/create_call_smell.svg';
import trashLogo from '../../images/create_call_trash.svg';
import elevatorLogo from '../../images/create_call_elevator.svg';
import otherLogo from '../../images/create_call_other.svg';
import iceLogo from '../../images/create_call_ice.svg';
import snowLogo from '../../images/create_call_snow.svg';
import treeLogo from '../../images/create_call_tree.svg';

const NewCall = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="logo"></div>
        <div className="header__user-profile">
          <a href="#" className="header__user-profile-enter">nikerfe@gmail.com</a>
          <button type="submit" className="header__user-profile-logout"></button>
        </div>
      </header>
      <section className="new-call">
        <nav className="navigation">
          <ul className="navigation__item-list">
            <li className="navigation__item">
              <a href="#" className="navigation__item-link"><div className="navigation__item-image navigation__item-image_type_user-calls"></div>
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
        <section className="create-call create-call_type_place">
          <div className="hint">
            <h2 className="int-title">Составьте новое обращение</h2>
            <p className="hint-subtitle">Выберите место где возникла проблема</p>
          </div>
          <div className="cards">
            <button type="button" className="card card_type_place">
              <img src="#" alt="" className="card__emoji"></img>
              <p className="card__title"> Кваритра</p>
            </button>
            <button type="button" className="card card_type_place">
              <img src="#" alt="" className="card__emoji"></img>
              <p className="card__title">Подъезд</p>
            </button>
            <button type="button" className="card card_type_place">
              <img src="#" alt="" className="card__emoji"></img>
              <p className="card__title">Двор</p>
            </button>
          </div>
          <button type="button" className="button button_type_forward"><p className="button__title">Далее</p></button>
        </section>
      </section>
      <footer className="footer"></footer>

      <header className="header">
        <div className="logo"></div>
        <div className="header__user-profile">
          <a href="#" className="header__user-profile-enter">nikerfe@gmail.com</a>
          <button type="submit" className="header__user-profile-logout"></button>
        </div>
      </header>
      <section className="new-call">
        <nav className="navigation">
          <ul className="navigation__item-list">
            <li className="navigation__item">
              <a href="#" className="navigation__item-link"><div className="navigation__item-image navigation__item-image_type_user-calls"></div>
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
        <section className="create-call create-call_type_problem create-call_type_problem-apartment">
          <div className="hint">
            <h2 className="int-title">Выберите проблему</h2>
            <p className="hint-subtitle"></p>
          </div>
          <div className="cards">
            <button type="button" className="card card_type_problem">
              <img src={plungerLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Засор канализации</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={cockroachLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Требуется дизенсекция</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={heatLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Высокая температура</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={floodLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Протечка трубы</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={lampLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Перегорела лампочка</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={frozeLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Низкая температура</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={craneLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Отсутствует вода</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={flashLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Отсутствует эл. питание</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={doorphoneLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Сломался домофон</p>
            </button>
          </div>
          <button type="button" className="button button_type_forward"><p className="button__title">Далее</p></button>
        </section>
      </section>
      <footer className="footer"></footer>

      <header className="header">
        <div className="logo"></div>
        <div className="header__user-profile">
          <a href="#" className="header__user-profile-enter">nikerfe@gmail.com</a>
          <button type="submit" className="header__user-profile-logout"></button>
        </div>
      </header>
      <section className="new-call">
        <nav className="navigation">
          <ul className="navigation__item-list">
            <li className="navigation__item">
              <a href="#" className="navigation__item-link"><div className="navigation__item-image navigation__item-image_type_user-calls"></div>
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
        <section className="create-call create-call_type_problem create-call_type_problem-entrace">
          <div className="hint">
            <h2 className="int-title">Выберите проблему</h2>
            <p className="hint-subtitle"></p>
          </div>
          <div className="cards">
            <button type="button" className="card card_type_problem">
              <img src={graffitiLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Надписи на стенах</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={cockroachLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Требуется дизенсекция</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={heatLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Высокая температура</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={adLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Рекламное объявление</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={lampLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Перегорела лампочка</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={frozeLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Низкая температура</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={floodLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Протечка трубы</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={flashLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Отсутствует эл. питание</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={doorphoneLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Сломался домофон</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={mopLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Уборка</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={smellLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Постороние запахи</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={trashLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Мусор</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={elevatorLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Неисправный лифт</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={otherLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Прочее</p>
            </button>
          </div>
          <button type="button" className="button button_type_forward"><p className="button__title">Далее</p></button>
        </section>
      </section>
      <footer className="footer"></footer>

      <header className="header">
        <div className="logo"></div>
        <div className="header__user-profile">
          <a href="#" className="header__user-profile-enter">nikerfe@gmail.com</a>
          <button type="submit" className="header__user-profile-logout"></button>
        </div>
      </header>
      <section className="new-call">
        <nav className="navigation">
          <ul className="navigation__item-list">
            <li className="navigation__item">
              <a href="#" className="navigation__item-link"><div className="navigation__item-image navigation__item-image_type_user-calls"></div>
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
        <section className="create-call create-call_type_problem create-call_type_problem-yard">
          <div className="hint">
            <h2 className="int-title">Выберите проблему</h2>
            <p className="hint-subtitle"></p>
          </div>
          <div className="cards">
            <button type="button" className="card card_type_problem">
              <img src={trashLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Мусор</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={cockroachLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Требуется дизенсекция</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={graffitiLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Надписи на стренах</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={iceLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Наледь на крыше</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={lampLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Перегорела лампочка</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={adLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Рекламное объявление</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={snowLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Неубранный снег</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={smellLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Посторонние запахи</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={mopLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Требуется уборка</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={otherLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Прочее</p>
            </button>
            <button type="button" className="card card_type_problem">
              <img src={treeLogo} alt="" className="card__emoji"></img>
              <p className="card__title">Озелененение двора</p>
            </button>
          </div>
          <button type="button" className="button button_type_forward"><p className="button__title">Далее</p></button>
        </section>
      </section>
      <footer className="footer"></footer>
    </div>

  )
};

export default NewCall;
