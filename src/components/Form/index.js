import './styles.css';
import { useRef } from 'react';
import SubmitButton from '../SubmitButton';
import useFormValidation from '../../hooks/useFormValidation';

const Form = ({
  children,
  onSubmit,
  isSubmitActive
}) => {

  // Определяем форму для валидации
  const formRef = useRef();

  const handleSubmit = (e) => {
    // TODO -- раскомментировать, когда будет onSubmit
    // e.preventDefault();
    // onSubmit();
  }

  let { isSubmitValid } = useFormValidation({ formRef, isSubmitActive });

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      {children}
      <SubmitButton
        title="Регистрация"
        isActive={isSubmitValid}
      />
    </form>
  )
};

export default Form;
