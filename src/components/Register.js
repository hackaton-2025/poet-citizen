import { useEffect } from 'react';
import useFormValidation from '../hooks/useFormWithValidation';
import setCustomValidity from '../utils/setCustomValidity';
import thinkSmileImage from '../images/emoji/129300.png';
import Form from './Form';
import FormInput from './FormInput';

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
        <FormInput
          name="name"
          labelText="ФИО"
          type="text"
          pattern="^[A-Za-zА-Яа-яёЁ\s\-]+$"
          required={true}
          value={values.name || ''}
          error={errors.name}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <FormInput
          name="street"
          labelText="Улица"
          type="text"
          minLength="2"
          required={true}
          value={values.street || ''}
          error={errors.street}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="form__fieldset form__fieldset_type_four-columns">
        <FormInput
          name="house"
          labelText="Дом"
          type="text"
          pattern="^(\d{1,3}[а-я]{0,1})"
          required={true}
          value={values.house || ''}
          error={errors.house}
          onChange={handleChange}
        />
        <FormInput
          name="entrance"
          labelText="Подъезд"
          type="text"
          pattern="^(\d{1,2})"
          value={values.entrance || ''}
          error={errors.entrance}
          onChange={handleChange}
        />
        <FormInput
          name="floor"
          labelText="Этаж"
          type="text"
          pattern="^(\d{1,3})"
          value={values.floor || ''}
          error={errors.floor}
          onChange={handleChange}
        />
        <FormInput
          name="flat"
          labelText="Квартира"
          type="text"
          pattern="^(\d{1,4}[а-я]{0,1})"
          value={values.flat || ''}
          error={errors.flat}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="form__fieldset form__fieldset_type_two-one-columns ">
        <div className="form__separator" />
        <FormInput
          name="email"
          labelText="Email"
          type="email"
          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
          required={true}
          value={values.email || ''}
          error={errors.email}
          onChange={handleChange}
        />
        <FormInput
          name="tel"
          labelText="Номер телефона"
          type="tel"
          minLength="7"
          pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
          required={true}
          value={values.tel || ''}
          error={errors.tel}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="form__fieldset">
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
  );
};

export default Register;
