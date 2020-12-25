import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFormValidation from '../hooks/useFormWithValidation';
import setCustomValidity from '../utils/setCustomValidity';
import Form from './Form';
import helloEmoji from '../images/emoji/128075.png';

const Login = ({ onLogin, loggedIn }) => {

  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
  }, [loggedIn]);

  const { values, errors, isFormValid, handleChange } = useFormValidation(setCustomValidity);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  }
  

  // onSubmit={handleSubmit}
  // submitTitle="Регистрация"
  // isFormValid={isFormValid}
  // linkEnvText="Уже зарегистрированы?"
  // linkText="Войти"
  // path="/signin"
  // typeModificator="form_type_register"
  // title="Создать аккаунт"
  // imageUrl={thinkSmileImage}
  // imageAlt="Думающий эмоджи"

  return (
    <Form
      onSubmit={handleSubmit}
      submitTitle="Войти"
      isFormValid={isFormValid}
      linkEnvText="Ещё нет аккаунта?"
      linkText="Создайте сейчас"
      path="/signup"
      typeModificator="form__main-container_type_login"
      title="Личный кабинет"
      imageUrl={helloEmoji}
      imageAlt="Прветствующий эмоджи"
    >
      <fieldset className="form__fieldset">
        <div className="form__input-container">
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
        </div>
        <div className="form__input-container">  
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
        </div>
      </fieldset>
    </Form>
  )
};

export default Login;
