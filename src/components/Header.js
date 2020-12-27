import { useContext } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Logo from "./Logo";
import hamburgerIcon from "../images/hamburger.svg";
import closeIcon from "../images/close-icon.svg";

const Header = ({ loggedIn, onLogout, onHamburgerClick, isMenuOpen }) => {
  const userEmail = useContext(CurrentUserContext).email;

  const userProfileClassName = cn(
    "header__user-profile",
    {
      "header__user-profile_mobile_visible": isMenuOpen,
      "header__user-profile_mobile_hidden": !isMenuOpen,
    },
  );

  const headerClassName = cn(
    "header",
    {"header_menu-opened": isMenuOpen},
  );

  return (
    <header className={headerClassName}>
      <div className="header__content page__narrow">
        { !isMenuOpen && <Logo /> }
        { loggedIn
          ? <>
            <div className={userProfileClassName}>
              <Link to="/me/calls" className="header__user-profile-enter">{userEmail}</Link>
              <button className="header__user-profile-logout page__button" onClick={onLogout} />
            </div>
            <button className="header__menu-btn" onClick={onHamburgerClick}>
              { isMenuOpen
                ? <img src={closeIcon} alt="Кнопка закрыть" />
                : <img src={hamburgerIcon} alt="Кнопка меню" />
              }
            </button>
          </>
          : <>
            <Link to="/signin" className="header__btn">
              Личный кабинет
            </Link>
          </>
        }
      </div>
    </header>
  );
};
// TODO -- поздно появился макет для мобильных разрешений, реализация меню плохая -- переделать.

export default Header;
