import cn from 'classnames';

const Form = ({ onSubmit, children, submitTitle, isFormValid, modificator }) => {
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
        <button className="form__button-close"></button>
      </form>
    </div>
  );
};

export default Form;
