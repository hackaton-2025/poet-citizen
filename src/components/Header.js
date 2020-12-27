import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Logo from "./Logo";

const Header = ({ loggedIn, onLogout }) => {
  const userEmail = useContext(CurrentUserContext).email;

  return (
    <header className="header">
      <div className="header__content page__narrow">
        <Logo />
        { loggedIn
          ? <>
            <div className="header__user-profile">
              <Link to="/me/calls" className="header__user-profile-enter">{userEmail}</Link>
              <button className="header__user-profile-logout page__button" onClick={onLogout} />
            </div>
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

export default Header;
