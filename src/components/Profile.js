const Profile = () => {
  return (
    <div className="profile">
      <h2 className="profile__title">Ваш профиль</h2>
      <form action="" className="profile__form">
        <label className="profile__label">ФИО</label>
        <p className="profile__input">Родина Полина Александровна</p>
        <label className="profile__label">Адрес</label>
        <p className="profile__input">
          Ул. 1 мая, дом 6/а, подъезд 3, квартира 238
        </p>
        <label className="profile__label">E-mail</label>
        <p className="profile__input">lalala@gmail.com</p>
        <label className="profile__label">Телефон</label>
        <p className="profile__input">+7 700 600 50 40</p>
      </form>
    </div>
  );
};

export default Profile;
