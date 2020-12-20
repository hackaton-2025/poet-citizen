import cn from 'classnames';
import { Link } from 'react-router-dom';

const Form = ({ onSubmit, children, submitTitle, isFormValid, linkText, path, modificator }) => {
  const formClassName = cn("form", {[modificator]: modificator});
  return (
    <div className="form-wrapper">
      <form
        className={formClassName}
        onSubmit={onSubmit}
      >
        {children}
        <button
            type="submit"
            disabled={!isFormValid}
            className="form__submit-button"
          >
            {submitTitle}
        </button>
        {linkText && <Link className="form__link" to={path}>{linkText}</Link>}
        <Link className="form__button-close" to="/"></Link>
      </form>
    </div>
  );
};

export default Form;
