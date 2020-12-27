import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const Profile = () => {
  const { name, address, email, tel } = useContext(CurrentUserContext);
  return (
    <div className="profile">
      <h2 className="profile__title">Ваш профиль</h2>
      <form action="" className="profile__form">
        <h3 className="profile__label">ФИО</h3>
        <p className="profile__input">{name}</p>
        <h3 className="profile__label">Адрес</h3>
        <p className="profile__input">{address}</p>
        <h3 className="profile__label">E-mail</h3>
        <p className="profile__input">{email}</p>
        <h3 className="profile__label">Телефон</h3>
        <p className="profile__input">{tel}</p>
      </form>
    </div>
  );
};

export default Profile;
