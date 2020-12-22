import cn from 'classnames';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NYDecoration from './NYDecoration';

const Form = ({
  onSubmit,
  children,
  submitTitle,
  isFormValid,
  linkEnvText,
  linkText,
  path,
  modificator,
  title,
  imageUrl,
  imageAlt,
}) => {

  const formClassName = cn("form", {[modificator]: modificator});

  return (
    <div className="form-wrapper">
      <form
        className={formClassName}
        onSubmit={onSubmit}
      >
        <div className="form__header">
        <Link className="form__link" to="/">&lt; Вернуться на главную</Link>
          <h2 className="form__title">{title}</h2>
          <img src={imageUrl} alt={imageAlt} className="form__image form__image_type_think-smile"></img>
        </div>
          <div className="form__main-container">
          {children}
          <button
              type="submit"
              disabled={!isFormValid}
              className="form__submit-button"
            >
              {submitTitle}
          </button>
          {linkText && 
            <p className="form__link-env-text">
              {`${linkEnvText}`}
              <Link className="form__link" to={path}>
                {` ${linkText}`}
              </Link>
            </p>
          }
        </div>
        <NYDecoration ref={decorRef} />
      </form>
    </div>
  );
};

export default Form;
