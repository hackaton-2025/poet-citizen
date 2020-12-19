import { Link } from "react-router-dom";
import "./styles.css";

const StartPage = () => {
  return (
    // TODO -- Это всё просто для наглядности. Убрать.
    <div className="page-container">
      <header class="header">
        <div class="header__content">
          <div class="contacts">
            <div class="logo"></div>
            <h3 class="contacts__text">Написать нам: dom@zhkh.ru</h3>
          </div>
          <Link to="/signin" className="header__btn">
            Войти
          </Link>
        </div>
      </header>
      <section class="banner">
        <div class="banner__content">
          <h1 class="banner__title">
            Экспресс заявки на проведение работ по благоустройству и
            обслуживанию объектов жилых комплексов
          </h1>
          <div class="banner__btn-container">
            <Link to="/me" className="banner__btn">
              Личный кабинет
            </Link>
            <Link to="/signup" className="banner__btn banner__btn_transparent">
              Регистрация
            </Link>
          </div>
        </div>
      </section>
      <section class="content">
        <div class="content__content">
          <h2 class="content__title">Услуги</h2>
          <ul class="content__list">
            <li class="content__item"></li>
            <li class="content__item"></li>
            <li class="content__item"></li>
            <li class="content__item"></li>
            <li class="content__item"></li>
            <li class="content__item"></li>
          </ul>
        </div>
      </section>
      <section class="content content_news">
        <div class="content__content">
          <h2 class="content__title">Новости</h2>
          <ul class="content__list">
            <li class="content__item content__item_news"></li>
            <li class="content__item content__item_news"></li>
            <li class="content__item content__item_news"></li>
          </ul>
        </div>
      </section>
      <footer class="footer">
        <div class="footer__content">
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
