import './styles.css';
import useFormValidation from '../../hooks/useFormWithValidation';
import setCustomValidity from '../../utils/setCustomValidity';

const Login = ({
  // TODO -- прописать в App функцию для обработки login
  // и передать в пропсы
  onLogin
}) => {

  const { values, errors, isFormValid, handleChange } = useFormValidation(setCustomValidity);

  const handleSubmit = (e) => {
    // TODO -- раскомментировать, когда будет onLogin
    // e.preventDefault();
    // onLogin();
  }

  return (
    <div className="form-wrapper">
      <div className="form-container form-container_type_login">
      <button className="form__button-close form_button-close_type_login"></button>
      <form
        className="form form_type_login"
        onSubmit={handleSubmit}
      >
        <h2 className="form__title form__title_type_login">Личный кабинет</h2>

        <label className="form__label form__label_type_login" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
          required={true}
          value={values.email || ''}
          onChange={handleChange}
          className="form__input form__input_type_login"
        />
        <span className="form__input-error form__input-error_type_login">{errors.email || ''}</span>

        <label className="form__label form__label_type_login" htmlFor="password">Пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          minLength="6"
          required={true}
          value={values.password || ''}
          onChange={handleChange}
          className="form__input form__input_type_login"
        />
        <span className="form__input-error form__input-error_type_login">{errors.password || ''}</span>

        <button
          className="submit-btn"
          type="submit"
          disabled={!isFormValid}
          className="button button_type_enter"
        >
          Вход
        </button>
      </form>
      </div>
    </div>
  )
};

export default Login;
