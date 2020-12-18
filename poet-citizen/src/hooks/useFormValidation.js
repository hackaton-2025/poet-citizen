import { useState, useEffect } from 'react';


/* Пользовательский хук валидации формы.
  на вход передаётся два параметра:
  - formRef -- ссылка на форму,
  - isSubmitActive -- начальное состояние кнопки отправки формы.
  Хук возвращает состояние кнопки отправки формы после валидации.
*/
const useFormValidation = ({ formRef, isSubmitActive }) => {
  // Стейт-переменная для изменения валидности кнопки отправки формы в зависимости от валидности формы
  const [isSubmitValid, setSubmitValidity] = useState(!isSubmitActive);
  
    // Валидация формы
    useEffect(() => {
      const isFormValid = [...formRef.current.elements]
        .filter((elem) => elem.name)
        .every((elem) => elem.validity.valid);
  
      setSubmitValidity(isFormValid);
    });

    return {
      isSubmitValid
    }
}

export default useFormValidation;