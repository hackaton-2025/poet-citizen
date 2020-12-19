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

  return(
    <div className="form-wrapper">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <h2>Создать аккаунт</h2>

        <label htmlFor="name">ФИО</label>
        <input
          id="name"
          name="name"
          type="text"
          pattern="^[A-Za-zА-Яа-яёЁ\s\-]+$"
          required={true}
          value={values.name || ''}
          onChange={handleChange}
        />
        <span>{errors.name || ''}</span>

        <label htmlFor="tel">Номер телефона</label>
        <input
          id="tel"
          name="tel"
          type="tel"
          minLength="10"
          pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
          required={true}
          value={values.tel || ''}
          onChange={handleChange}
        />
        <span>{errors.tel || ''}</span>

        <label htmlFor="street">Улица</label>
        <input
          id="street"
          name="street"
          type="text"
          minLength="2"
          required={true}
          value={values.street || ''}
          onChange={handleChange}
        />
        <span>{errors.street || ''}</span>

        <label htmlFor="house">Дом</label>
        <input
          id="house"
          name="house"
          type="text"
          pattern="^(\d{1,3}[а-я]{0,1})"
          required={true}
          value={values.house || ''}
          onChange={handleChange}
        />
        <span>{errors.house || ''}</span>

        <label htmlFor="entrance">Подъезд</label>
        <input
          id="entrance"
          name="entrance"
          type="text"
          pattern="^(\d{1,2})"
          value={values.entrance || ''}
          onChange={handleChange}
        />
        <span>{errors.entrance || ''}</span>

        <label htmlFor="floor">Этаж</label>
        <input
          id="floor"
          name="floor"
          type="text"
          pattern="^(\d{1,2})"
          value={values.floor || ''}
          onChange={handleChange}
        />
        <span>{errors.floor || ''}</span>

        <label htmlFor="flat">Квартира</label>
        <input
          id="flat"
          name="flat"
          type="text"
          pattern="^(\d{1,4}[а-я]{0,1})"
          value={values.flat || ''}
          onChange={handleChange}
        />
        <span>{errors.flat || ''}</span>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
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

export default Register;
