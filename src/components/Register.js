import { useEffect } from 'react';
import useFormValidation from '../hooks/useFormWithValidation';
import setCustomValidity from '../utils/setCustomValidity';
import thinkSmileImage from '../images/emoji/129300.png';
import Form from './Form';

const Register = ({ onRegister, errorMessage, resetErrorMessage }) => {

  const { values, errors, isFormValid, handleChange } = useFormValidation(setCustomValidity);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  }

  useEffect(() => {
    resetErrorMessage();
  }, [values]);

  return (
    <Form
      onSubmit={handleSubmit}
      submitTitle="Создать аккаунт"
      isFormValid={isFormValid}
      linkEnvText="Уже зарегистрированы?"
      linkText="Войти"
      path="/signin"
      typeModificator="form__main-container_type_register"
      title="Создать аккаунт"
      imageUrl={thinkSmileImage}
      imageAlt="Думающий эмоджи"
      errorMessage={errorMessage}
    >
      <fieldset className="form__fieldset">
        <div className="form__input-container">
          <label className="form__label" htmlFor="name">ФИО</label>
          <input
            id="name"
            name="name"
            type="text"
            pattern="^[A-Za-zА-Яа-яёЁ\s\-]+$"
            required={true}
            value={values.name || ''}
            onChange={handleChange}
            className="form__input"
          />
          <span className="form__input-error">{errors.name || ''}</span>
        </div>
      </fieldset>
      <fieldset className="form__fieldset">
        <div className="form__input-container">
          <label className="form__label" htmlFor="street">Улица</label>
          <input
            id="street"
            name="street"
            type="text"
            minLength="2"
            required={true}
            value={values.street || ''}
            onChange={handleChange}
            className="form__input"
          />
          <span className="form__input-error">{errors.street || ''}</span>
        </div>
      </fieldset>
      <fieldset className="form__fieldset form__fieldset_type_four-columns">
        <div className="form__input-container">
          <label className="form__label" htmlFor="house">Дом</label>
          <input
            id="house"
            name="house"
            type="text"
            pattern="^(\d{1,3}[а-я]{0,1})"
            required={true}
            value={values.house || ''}
            onChange={handleChange}
            className="form__input"
          />
          <span className="form__input-error">{errors.house || ''}</span>
        </div>
        <div className="form__input-container">
          <label className="form__label" htmlFor="entrance">Подъезд</label>
          <input
            id="entrance"
            name="entrance"
            type="text"
            pattern="^(\d{1,2})"
            value={values.entrance || ''}
            onChange={handleChange}
            className="form__input"
          />
          <span className="form__input-error">{errors.entrance || ''}</span>
        </div>
        <div className="form__input-container">
          <label className="form__label" htmlFor="floor">Этаж</label>
          <input
            id="floor"
            name="floor"
            type="text"
            pattern="^(\d{1,2})"
            value={values.floor || ''}
            onChange={handleChange}
            className="form__input"
          />
          <span className="form__input-error">{errors.floor || ''}</span>
        </div>
        <div className="form__input-container">
          <label className="form__label" htmlFor="flat">Квартира</label>
          <input
            id="flat"
            name="flat"
            type="text"
            pattern="^(\d{1,4}[а-я]{0,1})"
            value={values.flat || ''}
            onChange={handleChange}
            className="form__input"
          />
          <span className="form__input-error">{errors.flat || ''}</span>
        </div>
      </fieldset>
      <fieldset className="form__fieldset form__fieldset_type_two-columns ">
      <div className="form__separator" />
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
          <label className="form__label" htmlFor="tel">Номер телефона</label>
          <input
            id="tel"
            name="tel"
            type="tel"
            minLength="7"
            pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
            required={true}
            value={values.tel || ''}
            onChange={handleChange}
            className="form__input"
          />
          <span className="form__input-error">{errors.tel || ''}</span>
        </div>
      </fieldset>
      <fieldset className="form__fieldset">
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

export default Register;
