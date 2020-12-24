import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

import NewsPopup from "./NewsPopup";

import lightning from "../images/emoji/9889.png";
import house from "../images/emoji/127969.png";
import bulb from "../images/emoji/128161.png";
import newsEmoji from "../images/emoji/128195.png";
import faucet from "../images/emoji/128688.png";
import broom from "../images/emoji/129529.png";

import uslugi1 from "../images/emoji/uslugi1.svg";
import uslugi2 from "../images/emoji/uslugi2.svg";
import uslugi3 from "../images/emoji/uslugi3.svg";
import uslugi4 from "../images/emoji/uslugi4.svg";
import uslugi5 from "../images/emoji/uslugi5.svg";
import uslugi6 from "../images/emoji/uslugi6.svg";

const StartPage = ({ loggedIn, onLogout }) => {
  let [news, toggleNews] = useState([
    {
      id: 0,
      date: "14.12.2020",
      subtitle: "Внимание! Повышение тарифов",
      text:
        "Убавленный процентик банка,<br />Весьма пониженный тариф,<br />Статейки господина Бланка –<br />Всё это были, а не миф.",
      realText:
        "Тариф на тепловую энергию, для расчета за коммунальную услугу по отоплению, руб./Гкал:<br />1 818,29 р.<br /><br />Тариф на горячую воду, с открытой и закрытой централизованной системой, руб./м3:<br />109,10 р.",
      show: false,
    },
    {
      id: 1,
      date: "20.12.2020",
      subtitle: "Проведены работы во дворе",
      text:
        "Терпенье нужно, и геройство,<br />и даже гибель, может быть,<br />чтоб всей земли переустройство,<br />как подобает, завершить",
      realText: "Посажены деревья у 4 парадной",
      show: false,
    },
    {
      id: 2,
      date: "23.12.2020",
      subtitle: "В парадной найдена сережка",
      text:
        "Моя барышня по садику гуляла,<br />По дорожке вечером ходила –<br />С бриллиантиком колечко потеряла,<br />С белой ручки его, видно, обронила",
      realText: "Найденную сережку можно забрать в офисе ОБЭИРУ",
      show: false,
    },
  ]);

  const renderPopup = (id) => {
    toggleNews(
      news.map((item) => {
        if (item.id === id) {
          item.show = !item.show;
        }
        return item;
      })
    );
  };

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
          <img className="banner__icon banner__icon_news" src={newsEmoji}></img>
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
              <button
                className="section__link"
                type="button"
                onClick={(evt) => {
                  renderPopup(0);
                }}
              >
                Подробнее
              </button>
              <NewsPopup
                show={news[0].show}
                date={news[0].date}
                title={news[0].subtitle}
                text={news[0].realText}
                close={() => {
                  renderPopup(0);
                }}
              />
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
              <button
                className="section__link"
                type="button"
                onClick={(evt) => {
                  renderPopup(1);
                }}
              >
                Подробнее
              </button>
              <NewsPopup
                show={news[1].show}
                date={news[1].date}
                title={news[1].subtitle}
                text={news[1].realText}
                close={() => {
                  renderPopup(1);
                }}
              />
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
              <button
                className="section__link"
                type="button"
                onClick={(evt) => {
                  renderPopup(2);
                }}
              >
                Подробнее
              </button>
              <NewsPopup
                show={news[2].show}
                date={news[2].date}
                title={news[2].subtitle}
                text={news[2].realText}
                close={() => {
                  renderPopup(2);
                }}
              />
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
