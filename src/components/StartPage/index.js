import { Link } from "react-router-dom";
import "./styles.css";

const StartPage = () => {
  return (
    // TODO -- Это всё просто для наглядности. Убрать.
    <div className="page-container">
      <header className="header">
        <div className="header__content">
          <div className="contacts">
            <div className="logo"></div>
            <h3 className="contacts__text">Написать нам: dom@zhkh.ru</h3>
          </div>
          <Link to="/signin" className="header__btn">
            Войти
          </Link>
        </div>
      </header>
      <section className="banner">
        <div className="banner__content">
          <h1 className="banner__title">
            Экспресс заявки на проведение работ по благоустройству и
            обслуживанию объектов жилых комплексов
          </h1>
          <div className="banner__btn-container">
            <Link to="/me" className="banner__btn">
              Личный кабинет
            </Link>
            <Link to="/signup" className="banner__btn banner__btn_transparent">
              Регистрация
            </Link>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="content__content">
          <h2 className="content__title">Услуги</h2>
          <ul className="content__list">
            <li className="content__item"></li>
            <li className="content__item"></li>
            <li className="content__item"></li>
            <li className="content__item"></li>
            <li className="content__item"></li>
            <li className="content__item"></li>
          </ul>
        </div>
      </section>
      <section className="content content_news">
        <div className="content__content">
          <h2 className="content__title">Новости</h2>
          <ul className="content__list">
            <li className="content__item content__item_news"></li>
            <li className="content__item content__item_news"></li>
            <li className="content__item content__item_news"></li>
          </ul>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__content">
          <Link to="/new-call" className="">
            Оставить заявку
          </Link>
          <Link to="/about" className="">
            О проекте
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default StartPage;
