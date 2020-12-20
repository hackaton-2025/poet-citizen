import { useState, useCallback } from 'react';


/* Пользовательский хук для формы с валидацией.
  На вход принимает необязательный параметр в виде функции кастомизации сообщений
  об ошибках setCustomValidity.
  Хук возвращает состояние значения полей ввода, сообщения ошибок,
  валидность формы, обработчик изменений поля ввода, функцию сброса полей формы.
*/
const useFormValidation = (setCustomValidity) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const [isFormValid, setFormValidity] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;

    if (setCustomValidity) {
      setCustomValidity(target);
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setFormValidity(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFofmValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setFormValidity(newIsFofmValid);
    },
    [setValues, setErrors, setFormValidity]
  );

  return {
    values,
    errors,
    isFormValid,
    handleChange,
    resetForm,
  }
}

export default useFormValidation;
