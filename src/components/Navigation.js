import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__item-list">
        <li className="navigation__item">
          <Link href="#" className="navigation__item-link"><div className="navigation__item-image navigation__item-image_type_user-calls"></div>
            <p className="navigation__item-title">Заявка</p>
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__item-link" to="/new-call">
            <div className="navigation__item-image navigation__item-image_type_new-call"></div>
            <p className="navigation__item-title">Оставить обращение</p>
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__item-link" to="/me">
            <div className="navigation__item-image navigation__item-image_type_profile"></div>
            <p className="navigation__item-title">Профиль</p>
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__item-link" to="/about">
            <div className="navigation__item-image navigation__item-image_type_profile"></div>
            <p className="navigation__item-title">О проекте</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
