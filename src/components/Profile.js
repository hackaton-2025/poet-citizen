const Profile = () => {
  return (
    <div className="profile">
      <h2 className="profile__title">Ваш профиль</h2>
			<form action="" className="profile__form">
				<label className="profile__label">ФИО</label>
				<input type="text" name="" id="" className="profile__input" readonly="readonly" value="Родина Полина Александровна"/>
				<label className="profile__label">Адрес</label>
				<input type="text" name="" id="" className="profile__input" readonly="readonly" value="Ул. 1 мая, дом 6/а, подъезд 3, квартира 238"/>
				<label className="profile__label">E-mail</label>
				<input type="text" name="" id="" className="profile__input" readonly="readonly" value="lalala@gmail.com"/>
				<label className="profile__label">Телефон</label>
				<input type="text" name="" id="" className="profile__input" readonly="readonly" value="+7 700 600 50 40"/>
			</form>
    </div>
  );
};

export default Profile;
