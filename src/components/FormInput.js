import cn from 'classnames';

const FormInput = ({
  name,
  labelText,
  value,
  error,
  type,
  minLength,
  maxLength,
  pattern,
  required,
  onChange,
}) => {

  const inputClassName = cn(
    'form__input',
    {
      'form__input_valid': error === '',
      'form__input_invalid': error,
      'form__input_on-load': !error,
    },
  );

  return (
    <div className="form__input-container">
      <label className="form__label" htmlFor={name}>{labelText}</label>
      <input
        id={name}
        name={name}
        type={type}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        value={value}
        onChange={onChange}
        className={inputClassName}
      />
      <span className="form__input-error">{error && error}</span>
    </div>
  );
};

export default FormInput;
