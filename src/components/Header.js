import { Link } from "react-router-dom";

const Header = ({ loggedIn, onLogout }) => {
  return (
    <header className="header">
      <div className="header__content page__narrow">
        { loggedIn
          ? <>
            <div className="logo"></div>
            <div className="header__user-profile">
              <p className="header__user-profile-enter">nikerfe@gmail.com</p>
              <button className="header__user-profile-logout page__button" onClick={onLogout} />
            </div>
          </>
          : <>
            <div className="header__contacts">
              <div className="logo"></div>
              <h3 className="header__email">Написать нам: dom@zhkh.ru</h3>
            </div>
            <Link to="/signin" className="header__btn">
              Войти
            </Link>
          </>
        }
      </div>
    </header>
  );
};

export default Header;
