const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <div className="header__user-profile">
        <p className="header__user-profile-enter">nikerfe@gmail.com</p>
        <button type="submit" className="header__user-profile-logout page__button"></button>
      </div>
    </header>
  );
};

export default Header;
