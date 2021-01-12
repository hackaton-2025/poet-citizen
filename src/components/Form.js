import cn from 'classnames';
import { Link } from 'react-router-dom';
import Parallaxed from './Parallaxed';
import treeSmileImage from '../images/form_christmas-tree.svg';
import giftSmileImage from '../images/form_gift.png';

const Form = ({
  onSubmit,
  children,
  submitTitle,
  isFormValid,
  linkEnvText='',
  linkText,
  path,
  typeModificator,
  title='Добро пожаловать!',
  imageUrl,
  imageAlt='',
  errorMessage,
}) => {

  const formContentClassName = cn("form__main-container", {[typeModificator]: typeModificator});

  return (
    <div className="form-wrapper">
      <form
        className="form"
        onSubmit={onSubmit}
      >
        <div className="form__header">
        <Link className="form__link" to="/">&lt; Вернуться на главную</Link>
          <h2 className="form__title">{title}</h2>
          { imageUrl &&
            <img src={imageUrl} alt={imageAlt} className="form__image form__image_type_think-smile" />
          }
        </div>
          <div className={formContentClassName}>
            { errorMessage && <p className="form__error">{errorMessage}</p> }
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
        <Parallaxed>
          <img src={treeSmileImage} alt="Эмоджи с ёлкой" className="ny-decor__image ny-decor__image_content_tree" />
          <img src={giftSmileImage} alt="Эмоджи с подарком" className="ny-decor__image ny-decor__image_content_gift" />
        </Parallaxed>
      </form>
    </div>
  );
};

export default Form;
