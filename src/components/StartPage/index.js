import { Link } from 'react-router-dom';
import './styles.css';

const StartPage = () => {
  return(
    // TODO -- Это всё просто для наглядности. Убрать.
    <div className="test">
      <h1>Здесь будет стартовая страница</h1>
      <Link to="/me">Личный кабинет</Link>
      <Link to="/new-call">Оставить заявку</Link>
      <Link to="/about">О проекте</Link>
      <Link to="/signup">Регистрация</Link>
      <Link to="/signin">Вход</Link>
    </div>
  )
};

export default StartPage;
