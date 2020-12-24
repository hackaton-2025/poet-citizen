import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import lightning from "../images/emoji/9889.png";
import house from "../images/emoji/127969.png";
import bulb from "../images/emoji/128161.png";
import news from "../images/emoji/128195.png";
import faucet from "../images/emoji/128688.png";
import broom from "../images/emoji/129529.png";

import uslugi1 from "../images/emoji/uslugi1.svg";
import uslugi2 from "../images/emoji/uslugi2.svg";
import uslugi3 from "../images/emoji/uslugi3.svg";
import uslugi4 from "../images/emoji/uslugi4.svg";
import uslugi5 from "../images/emoji/uslugi5.svg";
import uslugi6 from "../images/emoji/uslugi6.svg";

const StartPage = ({ loggedIn, onLogout }) => {
  return (
    <div className="page__container page__narrow">
      <Header loggedIn={loggedIn} onLogout={onLogout} />
      <section className="banner">
        <div className="banner__content page__narrow">
          <h1 className="banner__title">
            Экспресс заявки на проведение работ по благоустройству и
            обслуживанию объектов жилых комплексов
          </h1>
          <p className="banner__subtitle">
            Сервис экспресс-заявок для проведения работ по благоустройству и
            обслуживанию вашего дома
          </p>
          <img className="banner__icon banner__icon_news" src={news}></img>
          <img
            className="banner__icon banner__icon_lightning"
            src={lightning}
          ></img>
          <img className="banner__icon banner__icon_bulb" src={bulb}></img>
          <img className="banner__icon banner__icon_house" src={house}></img>
          <img className="banner__icon banner__icon_broom" src={broom}></img>
          <img className="banner__icon banner__icon_faucet" src={faucet}></img>
        </div>
      </section>
      <section className="section section_content_services">
        <div className="page__narrow">
          <h2 className="section__title">Виды услуг</h2>
          <ul className="section__list">
            <li className="section__item section__item_services">
              <div className="section__circle">
                <img className="section__emoji" src={uslugi1}></img>
              </div>
              <h3 className="section__subtitle">Плановый ремонт</h3>
            </li>
            <li className="section__item section__item_services">
              <div className="section__circle">
                <img className="section__emoji" src={uslugi2}></img>
              </div>
              <h3 className="section__subtitle">Благоустройство двора</h3>
            </li>
            <li className="section__item section__item_services">
              <div className="section__circle">
                <img className="section__emoji" src={uslugi3}></img>
              </div>
              <h3 className="section__subtitle">Аварийная работа</h3>
            </li>
            <li className="section__item section__item_services">
              <div className="section__circle">
                <img className="section__emoji" src={uslugi4}></img>
              </div>
              <h3 className="section__subtitle">Технический надзор</h3>
            </li>
            <li className="section__item section__item_services">
              <div className="section__circle">
                <img className="section__emoji" src={uslugi5}></img>
              </div>
              <h3 className="section__subtitle">Учет оплаты</h3>
            </li>
            <li className="section__item section__item_services">
              <div className="section__circle">
                <img className="section__emoji" src={uslugi6}></img>
              </div>
              <h3 className="section__subtitle">Вывоз мусора</h3>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section_content_news">
        <div className="page__narrow">
          <h2 className="section__title">Новости</h2>
          <ul className="section__list">
            <li className="section__item section__item_news">
              <p className="section__date">14.12.2020</p>
              <h3 className="section__subtitle section__subtitle_news">
                Внимание! Повышение тарифов
              </h3>
              <p className="section__text">
                Убавленный процентик банка,
                <br />
                Весьма пониженный тариф,
                <br />
                Статейки господина Бланка –<br />
                Всё это были, а не миф.
              </p>
              <p className="section__real-text"></p>
              <button className="section__link" type="button">
                Подробнее
              </button>
            </li>
            <li className="section__item section__item_news">
              <p className="section__date">20.12.2020</p>
              <h3 className="section__subtitle section__subtitle_news">
                Проведены работы во дворе
              </h3>
              <p className="section__text">
                Терпенье нужно, и геройство,
                <br />и даже гибель, может быть,
                <br />
                чтоб всей земли переустройство,
                <br />
                как подобает, завершить
              </p>
              <p className="section__real-text"></p>
              <button className="section__link" type="button">
                Подробнее
              </button>
            </li>
            <li className="section__item section__item_news">
              <p className="section__date">23.12.2020</p>
              <h3 className="section__subtitle section__subtitle_news">
                В парадной найдена сережка
              </h3>
              <p className="section__text">
                Моя барышня по садику гуляла,
                <br />
                По дорожке вечером ходила –<br />С бриллиантиком колечко
                потеряла,
                <br />С белой ручки его, видно, обронила
              </p>
              <p className="section__real-text"></p>
              <button className="section__link" type="button">
                Подробнее
              </button>
            </li>
          </ul>
        </div>
      </section>
      <Footer>
        <div className="logo" />
        <div className="footer__email">
          <p className="footer__email-title">Написать нам:</p>
          <Link to="/new-call" className="footer__email-link">
            info@obeiru.ru
          </Link>
        </div>
        <Link to="/about" className="footer__about">
          О проекте
        </Link>
        <div className="footer__copyright">
          <p className="footer__copyright-title">Яндекс.Практикум</p>
          <p className="footer__copyright-subtitle">Hackaton 2025</p>
        </div>
      </Footer>
    </div>
  );
};

export default StartPage;
