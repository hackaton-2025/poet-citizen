import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import newsItems from "../configs/news";

import lightning from "../images/emoji/9889.png";
import house from "../images/emoji/127969.png";
import bulb from "../images/emoji/128161.png";
import news from "../images/emoji/128195.png";
import faucet from "../images/emoji/128688.png";
import broom from "../images/emoji/129696.png";

import uslugi1 from "../images/emoji/uslugi1.svg";
import uslugi2 from "../images/emoji/uslugi2.svg";
import uslugi3 from "../images/emoji/uslugi3.svg";
import uslugi4 from "../images/emoji/uslugi4.svg";
import uslugi5 from "../images/emoji/uslugi5.svg";
import uslugi6 from "../images/emoji/uslugi6.svg";
import NewsItem from "./NewsItem";
import NewsPopup from "./NewsPopup";
import Navigation from "./Navigation";

// TODO -- когда-нибудь отрефакторить это, вынести компоненты и т.д.
const StartPage = ({ loggedIn, onLogout, isMobile, isMobileMenuOpen, onHamburgerClick }) => {
  const [isNewsPopupOpen, setNewsPopupState] = useState(false);

  const openNewsPopup = (newsItem) => {
    setNewsPopupState(true);
    setOpenedNewsItem(newsItem);
  };

  const closeNewsPopup = () => setNewsPopupState(false);

  const [openedNewsItem, setOpenedNewsItem] = useState(null);

  return (
    <>
      <div className="page__container">
        <Header
          loggedIn={loggedIn}
          onLogout={onLogout}
          isMenuOpen={isMobileMenuOpen}
          onHamburgerClick={onHamburgerClick}
        />
        <main className="start-page">  
          {isMobile && <Navigation url={"/me"} isMobileOpened={isMobileMenuOpen} /> }
          <section className="banner page__narrow">
            <div className="banner__content">
              <h1 className="banner__title">
                «Снимаю комнату с камином, Дела в порядок привожу, Гулять хожу на
                зимний воздух, И при наличии загвоздок
                <br />
                Вот из чего я исхожу»
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
              <img
                className="banner__icon banner__icon_faucet"
                src={faucet}
              ></img>
            </div>
          </section>
          <section className="section section_content_services">
            <div className="page__narrow">
              <h2 className="section__title">Виды услуг</h2>
              <ul className="section__list">
                <li className="section__item section__item_type_services">
                  <div className="section__circle">
                    <img className="section__emoji" src={uslugi1}></img>
                  </div>
                  <h3 className="section__subtitle">Плановый ремонт</h3>
                </li>
                <li className="section__item section__item_type_services">
                  <div className="section__circle">
                    <img className="section__emoji" src={uslugi2}></img>
                  </div>
                  <h3 className="section__subtitle">Благоустройство двора</h3>
                </li>
                <li className="section__item section__item_type_services">
                  <div className="section__circle">
                    <img className="section__emoji" src={uslugi3}></img>
                  </div>
                  <h3 className="section__subtitle">Аварийная работа</h3>
                </li>
                <li className="section__item section__item_type_services">
                  <div className="section__circle">
                    <img className="section__emoji" src={uslugi4}></img>
                  </div>
                  <h3 className="section__subtitle">Технический надзор</h3>
                </li>
                <li className="section__item section__item_type_services">
                  <div className="section__circle">
                    <img className="section__emoji" src={uslugi5}></img>
                  </div>
                  <h3 className="section__subtitle">Учет оплаты</h3>
                </li>
                <li className="section__item section__item_type_services">
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
              <ul className="section__list section__list_type_news">
                {newsItems.map((newsItem) => (
                  <NewsItem newsItem={newsItem} onClick={openNewsPopup} />
                ))}
              </ul>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <NewsPopup
        isOpen={isNewsPopupOpen}
        onClose={closeNewsPopup}
        newsItem={openedNewsItem}
      />
    </>
  );
};

export default StartPage;
