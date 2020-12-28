import { NavLink } from "react-router-dom";
import cn from "classnames";

const Navigation = ({ url, isMobileOpened }) => {

  const navigationClassName = cn(
    "navigation",
    {
      "navigation_mobile_opened": isMobileOpened,
      "navigation_mobile_closed": !isMobileOpened,
    },
  );

  return (
    <nav className={navigationClassName}>
      <div className="navigation__header">
        <h2 className="navigation__title">Мой аккаунт</h2>
      </div>
      <div className="navigation__container">
        <NavLink to={`${url}/calls`} className="navigation__link" activeClassName="navigation__link_active">
          <div className="navigation__link-image navigation__link-image_type_user-calls" />
          <p className="navigation__link-title">Заявки</p>
        </NavLink>
        <NavLink to={`${url}/new-call`} className="navigation__link" activeClassName="navigation__link_active">
          <div className="navigation__link-image navigation__link-image_type_new-call" />
          <p className="navigation__link-title">Составить заявку</p>
        </NavLink>
        <NavLink to={`${url}/profile`} className="navigation__link" activeClassName="navigation__link_active">
          <div className="navigation__link-image navigation__link-image_type_profile" />
          <p className="navigation__link-title">Профиль</p>
        </NavLink>
        <NavLink to={`${url}/about`} className="navigation__link" activeClassName="navigation__link_active">
          <div className="navigation__link-image navigation__link-image_type_information" />
          <p className="navigation__link-title">О проекте</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
