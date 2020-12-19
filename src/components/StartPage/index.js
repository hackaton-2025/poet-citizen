import { Link } from "react-router-dom";
import "./styles.css";
import { FirebaseHelper } from "../../utils/FirebaseHelper.js";

const fbHelper = new FirebaseHelper();
fbHelper.initializeApp();

// fbHelper.addNewCard({
//   email: "test@yandex.ru",
//   name: "Коды эмоджи через пробел",
//   text: "Стих",
//   status: "Не просмотрено",
//   srochnost: "Срочно",
// });

fbHelper.getCards("test@yandex.ru").then((value) => {
  console.log(value);
});

const StartPage = () => {
  return (
    // TODO -- Это всё просто для наглядности. Убрать.
    <div className="test">
      <h1>Здесь будет стартовая страница</h1>
      <Link to="/me">Личный кабинет</Link>
      <Link to="/new-call">Оставить заявку</Link>
      <Link to="/about">О проекте</Link>
      <Link to="/signup">Регистрация</Link>
      <Link to="/signin">Вход</Link>
    </div>
  );
};

export default StartPage;
