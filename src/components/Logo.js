import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <div className="logo__container">
        <h1 className="logo__title">ОБЭРИУ</h1>
        <div className="logo__img" />
      </div>
    </Link>
  );
};

export default Logo;
