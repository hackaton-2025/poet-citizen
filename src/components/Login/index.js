import './styles.css';
import { useState } from 'react';
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
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <h2>Личный кабинет</h2>
        <label htmlFor="name">Email</label>
        <input
          id="name"
          name="email"
          placeholder="Введите email"
          type="email"
          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
          required={true}
          value={values.email || ''}
          onChange={handleChange}
        />
        <span>{errors.email || ''}</span>
        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          name="password"
          placeholder="Введите пароль"
          type="password"
          minLength="6"
          required={true}
          value={values.password || ''}
          onChange={handleChange}
        />
        <span>{errors.password || ''}</span>
        <button
          className="submit-btn"
          type="submit"
          disabled={!isFormValid}
        >
          Вход
        </button>
      </form>
    </div>
  )
};

export default Login;
