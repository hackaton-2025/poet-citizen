import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Header = ({ loggedIn, onLogout }) => {
  const userEmail = useContext(CurrentUserContext).email;

  return (
    <header className="header">
      <div className="header__content page__narrow">
        { loggedIn
          ? <>
            <Link to="/" className="logo">
              {/* Здесь содержимое логотипа */}
            </Link>
            {/* <div className="logo" /> */}
            <div className="header__user-profile">
              <Link to="/me/calls" className="header__user-profile-enter">{userEmail}</Link>
              <button className="header__user-profile-logout page__button" onClick={onLogout} />
            </div>
          </>
          : <>
            <div className="header__contacts">
              <div className="logo" />
            </div>
            <Link to="/signin" className="header__btn">
              Личный кабинет
            </Link>
          </>
        }
      </div>
    </header>
  );
};

export default Header;
