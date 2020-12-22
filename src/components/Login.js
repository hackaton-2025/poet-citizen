import useFormValidation from '../hooks/useFormWithValidation';
import setCustomValidity from '../utils/setCustomValidity';
import Form from './Form';

const Login = ({ onLogin }) => {

  const { values, errors, isFormValid, handleChange } = useFormValidation(setCustomValidity);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      submitTitle="Вход"
      isFormValid={isFormValid}
      linkText="Создать аккаунт"
      path="/signup"
      modificator="form_type_login"
    >
      <h2 className="form__title">Личный кабинет</h2>
      <label className="form__label" htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
        required={true}
        value={values.email || ''}
        onChange={handleChange}
        className="form__input"
      />
      <span className="form__input-error">{errors.email || ''}</span>
      <label className="form__label" htmlFor="password">Пароль</label>
      <input
        id="password"
        name="password"
        type="password"
        minLength="6"
        required={true}
        value={values.password || ''}
        onChange={handleChange}
        className="form__input"
      />
      <span className="form__input-error">{errors.password || ''}</span>
    </Form>
  )
};

export default Login;
