import useFormValidation from '../hooks/useFormWithValidation';
import setCustomValidity from '../utils/setCustomValidity';
import thinkSmileImage from '../images/form_think_smile.svg';
import treeSmileImage from '../images/form_christmas-tree.svg';
import giftSmileImage from '../images/form_gift.svg';
import Form from './Form';

const Register = ({ onRegister }) => {

  const { values, errors, isFormValid, handleChange } = useFormValidation(setCustomValidity);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister();
  }

  return (
    <Form
      onSubmit={handleSubmit}
      submitTitle="Регистрация"
      isFormValid={isFormValid}
      linkText="Войти"
      path="/signin"
      modificator="form_type_register"
    >
      <img src={treeSmileImage} alt="" className="form__image form__image_type_tree"></img>
      <img src={thinkSmileImage} alt="" className="form__image form__image_type_think-smile"></img>
      <img src={giftSmileImage} alt="" className="form__image form__image_type_gift"></img>
      <fieldset className="form__fieldset form__fieldset_type_contact ">
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
        <div className="form__input-container">
          <label className="form__label" htmlFor="tel">Номер телефона</label>
          <input
            id="tel"
            name="tel"
            type="tel"
            minLength="10"
            pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
            required={true}
            value={values.tel || ''}
            onChange={handleChange}
            className="form__input"
          />
          <span className="form__input-error">{errors.tel || ''}</span>
        </div>
      </fieldset>
      <fieldset className="form__fieldset form__fieldset_type_street">
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
      <fieldset className="form__fieldset form__fieldset_type_adress">
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
      <fieldset className="form__fieldset form__fieldset_type_login ">
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

export default Register;
