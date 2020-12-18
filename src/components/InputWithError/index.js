import './styles.css';
import { useState } from 'react';

const InputWithError = ({
  name,
  placeholder,
  type,
  minLength,
  maxLength,
  required,
  labelText='',
  onChange,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setValidState] = useState(true);

  const handleChenge = (e) => {
    setErrorMessage(e.target.validationMessage);
    onChange(e);
    setValidState(e.target.validity.valid);
  }

  return (
    <>
    {labelText && (
      <label htmlFor={name}>{labelText}</label>
    )}
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        onChange={handleChenge}
      />
      <span>
        {errorMessage}
      </span>
    </>
  )
};

export default InputWithError;
