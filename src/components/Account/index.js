import "./styles.css";

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
            <div className="requests__list">
              <h1 className="requests__title">
                Нет ни одной заявки в работе :(
              </h1>
            </div>
            <template id="requests__item">
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
            </template>
          </section>
        </section>
        <footer className="footer"></footer>
      </div>
    </div>
  );
};

export default NewCall;
