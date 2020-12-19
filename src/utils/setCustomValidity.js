// Кастомные сообщения об ошибках
const setCustomValidity = (target) => {
  target.setCustomValidity('');

  if (!target.validity.valid){
      if (target.validity.valueMissing) {
        target.setCustomValidity('Это поле обязательно');
    } else if (target.name === 'name') {
        target.setCustomValidity('Имя и фамилия могут содержать только буквы')
    }  else if (target.name === 'tel') {
        target.setCustomValidity('Номер телефона может содержать только цифры и символы "+", "-"')
    } else if (target.validity.tooShort) {
        target.setCustomValidity(`Введенное значение должно быть длинее ${target.minLength} символов`);
    } else if (target.validity.tooLong) {
        target.setCustomValidity(`Введенное значение должно быть короче ${target.maxLength} символов`)
    } else if (target.name === 'email' & target.validity.patternMismatch) {
        target.setCustomValidity('Пожалуйста, не забудьте "@" и домен')
    }
  } 
}

export default setCustomValidity;