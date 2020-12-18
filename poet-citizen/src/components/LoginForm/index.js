import './styles.css';
import { useState } from 'react';
import { Form } from "../Form";
import { InputWithError } from "../InputWithError"

export const LoginForm = ({
  // TODO -- прописать в App функцию для обработки login
  // и передать в пропсы
  onSubmit
}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // TODO -- переписать хук для валидации формы, чтобы использовать его здесь.
  const handleChange = (e) => {
    const { name, value } =e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  return (
    <div className="form-wrapper">
      <Form
        onSubmit={onSubmit}
        isSubmitActive={false}
      >
        <h2>Личный кабинет</h2>
        <InputWithError
          name="email"
          placeholder="Введите email"
          type="email"
          required={true}
          labelText="Email"
          onChange={handleChange}
        />
        <InputWithError
          name="password"
          placeholder="Введите пароль"
          type="password"
          minLength="6"
          required={true}
          labelText="Пароль"
          onChange={handleChange}
        />
      </Form>
    </div>
  )
};
