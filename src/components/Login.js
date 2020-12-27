import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFormValidation from '../hooks/useFormWithValidation';
import setCustomValidity from '../utils/setCustomValidity';
import Form from './Form';
import helloEmoji from '../images/emoji/128075.png';
import FormInput from './FormInput';

const Login = ({ onLogin, loggedIn, errorMessage, resetErrorMessage }) => {

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

  useEffect(() => {
    resetErrorMessage();
  }, [values]);

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
      errorMessage={errorMessage}
    >
      <fieldset className="form__fieldset">
        <FormInput
          name="email"
          type="email"
          labelText="Email"
          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
          required={true}
          value={values.email || ''}
          error={errors.email}
          onChange={handleChange}
        />
        <FormInput
          name="password"
          labelText="Пароль"
          type="password"
          minLength="6"
          required={true}
          value={values.password || ''}
          error={errors.password}
          onChange={handleChange}
        />
      </fieldset>
    </Form>
  )
};

export default Login;
