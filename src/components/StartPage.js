import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const StartPage = () => {
  return (
    <div className="page__container">
      <Header />
      <section className="banner">
        <div className="banner__content page__narrow">
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
      <section className="section section_content_services">
        <div className="page__narrow">
          <h2 className="section__title">Услуги</h2>
          <ul className="section__list">
            <li className="section__item"></li>
            <li className="section__item"></li>
            <li className="section__item"></li>
            <li className="section__item"></li>
            <li className="section__item"></li>
            <li className="section__item"></li>
          </ul>
        </div>
      </section>
      <section className="section section_content_news">
        <div className="page__narrow">
          <h2 className="section__title">Новости</h2>
          <ul className="section__list">
            <li className="section__item section__item_news"></li>
            <li className="section__item section__item_news"></li>
            <li className="section__item section__item_news"></li>
          </ul>
        </div>
      </section>
      <Footer>
        <Link to="/new-call" className="">
          Оставить заявку
        </Link>
        <Link to="/about" className="">
          О проекте
        </Link>
      </Footer>
    </div>
  );
};

export default StartPage;
