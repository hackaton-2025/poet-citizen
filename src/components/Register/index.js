import './styles.css';
import useFormValidation from '../../hooks/useFormWithValidation';
import setCustomValidity from '../../utils/setCustomValidity';

const Register = ({ onRegister }) => {

  const { values, errors, isFormValid, handleChange } = useFormValidation(setCustomValidity);

  const handleSubmit = (e) => {
    // TODO -- раскомментировать, когда будет onLogin
    // e.preventDefault();
    // onRegister();
  }

  return (
    <div className="form-wrapper">
      <div className="form-container form-container_type_register">
        <button className="form__button-close form_button-close_type_register"></button>
        <form
          className="form form_type_register"
          onSubmit={handleSubmit}
        >
          <h2 className="form__title form__title_type_register">Создать аккаунт</h2>
          <fieldset className="form__fieldset form__fieldset_type_register form__fieldset_type_contact ">
            <div className="form__input-container form__input-container_type_register">
              <label className="from__label form__label_type_register" htmlFor="name">ФИО</label>
              <input
                id="name"
                name="name"
                type="text"
                pattern="^[A-Za-zА-Яа-яёЁ\s\-]+$"
                required={true}
                value={values.name || ''}
                onChange={handleChange}
                className="form__input form__input_type_register"
              />
              <span className="form__input-error form__input-error_type_register">{errors.name || ''}</span>
            </div>
            <div className="form__input-container form__input-container_type_register">
              <label className="from__label form__label_type_register" htmlFor="tel">Номер телефона</label>
              <input
                id="tel"
                name="tel"
                type="tel"
                minLength="10"
                pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                required={true}
                value={values.tel || ''}
                onChange={handleChange}
                className="form__input form__input_type_register"
              />
              <span className="form__input-error form__input-error_type_register">{errors.tel || ''}</span>
            </div>
          </fieldset>
          <fieldset className="form__fieldset form__fieldset_type_register form__fieldset_type_street">
            <div className="form__input-container form__input-container_type_register">
              <label className="from__label form__label_type_register" htmlFor="street">Улица</label>
              <input
                id="street"
                name="street"
                type="text"
                minLength="2"
                required={true}
                value={values.street || ''}
                onChange={handleChange}
                className="form__input form__input_type_register"
              />
              <span className="form__input-error form__input-error_type_register">{errors.street || ''}</span>
            </div>
          </fieldset>
          <fieldset className="form__fieldset form__fieldset_type_register form__fieldset_type_adress">
            <div className="form__input-container form__input-container_type_register">
              <label className="from__label form__label_type_register" htmlFor="house">Дом</label>
              <input
                id="house"
                name="house"
                type="text"
                pattern="^(\d{1,3}[а-я]{0,1})"
                required={true}
                value={values.house || ''}
                onChange={handleChange}
                className="form__input form__input_type_register"
              />
              <span className="form__input-error form__input-error_type_register">{errors.house || ''}</span>
            </div>
            <div className="form__input-container form__input-container_type_register">
              <label className="from__label form__label_type_register" htmlFor="entrance">Подъезд</label>
              <input
                id="entrance"
                name="entrance"
                type="text"
                pattern="^(\d{1,2})"
                value={values.entrance || ''}
                onChange={handleChange}
                className="form__input form__input_type_register"
              />
              <span className="form__input-error form__input-error_type_register">{errors.entrance || ''}</span>
            </div>
            <div className="form__input-container form__input-container_type_register">
              <label className="from__label form__label_type_register" htmlFor="floor">Этаж</label>
              <input
                id="floor"
                name="floor"
                type="text"
                pattern="^(\d{1,2})"
                value={values.floor || ''}
                onChange={handleChange}
                className="form__input form__input_type_register"
              />
              <span className="form__input-error form__input-error_type_register">{errors.floor || ''}</span>
            </div>
            <div className="form__input-container form__input-container_type_register">
              <label className="from__label form__label_type_register" htmlFor="flat">Квартира</label>
              <input
                id="flat"
                name="flat"
                type="text"
                pattern="^(\d{1,4}[а-я]{0,1})"
                value={values.flat || ''}
                onChange={handleChange}
                className="form__input form__input_type_register"
              />
              <span className="form__input-error form__input-error_type_register">{errors.flat || ''}</span>
            </div>
          </fieldset>
          <fieldset className="form__fieldset form__fieldset_type_register form__fieldset_type_login ">
            <div className="form__input-container form__input-container_type_register">
              <label className="from__label form__label_type_register" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                required={true}
                value={values.email || ''}
                onChange={handleChange}
                className="form__input form__input_type_register"
              />

              <span className="form__input-error form__input-error_type_register">{errors.email || ''}</span>
            </div>
            <div className="form__input-container form__input-container_type_register">
              <label className="from__label form__label_type_register" htmlFor="password">Пароль</label>
              <input
                id="password"
                name="password"
                type="password"
                minLength="6"
                required={true}
                value={values.password || ''}
                onChange={handleChange}
                className="form__input form__input_type_register"
              />
              <span className="form__input-error form__input-error_type_register">{errors.password || ''}</span>
            </div>
          </fieldset>
          <button
            className="submit-btn"
            type="submit"
            disabled={!isFormValid}
            className="button button_type_register"
          >
            Вход
        </button>
        </form>
      </div>
    </div>
  )
};

export default Register;
