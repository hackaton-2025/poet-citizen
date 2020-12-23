import cn from 'classnames';
import { Link } from 'react-router-dom';
import NYDecoration from './NYDecoration';

const Form = ({
  onSubmit,
  children,
  submitTitle,
  isFormValid,
  linkEnvText='',
  linkText,
  path,
  modificator,
  title='Добро пожаловать!',
  imageUrl,
  imageAlt='',
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
          { imageUrl &&
            <img src={imageUrl} alt={imageAlt} className="form__image form__image_type_think-smile" />
          }
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
        <NYDecoration />
      </form>
    </div>
  );
};

export default Form;
