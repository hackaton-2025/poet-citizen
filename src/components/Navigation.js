import { Link } from 'react-router-dom';

const Navigation = ({ url }) => {
  return (
    <nav className="navigation">
      <div className="navigation__header">
        <h2 className="navigation__title">Мой аккаунт</h2>
      </div>
      <ul className="navigation__item-list">
        <li className="navigation__item">
          <Link className="navigation__item-link" to={`${url}/calls`}>
            <div className="navigation__item-image navigation__item-image_type_user-calls"></div>
            <p className="navigation__item-title">Заявки</p>
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__item-link" to={`${url}/new-call`}>
            <div className="navigation__item-image navigation__item-image_type_new-call"></div>
            <p className="navigation__item-title">Оставить обращение</p>
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__item-link" to={`${url}`}>
            <div className="navigation__item-image navigation__item-image_type_profile"></div>
            <p className="navigation__item-title">Профиль</p>
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__item-link" to="/about">
            <div className="navigation__item-image navigation__item-image_type_information"></div>
            <p className="navigation__item-title">О проекте</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
