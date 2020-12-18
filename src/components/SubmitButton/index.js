import './styles.css';

const SubmitButton = ({
  title,
  isActive,
}) => {
  return (
    <button
      className="submit-btn"
      type="submit"
      disabled={!isActive}
    >
      {title}
    </button>
  )
};

export default SubmitButton;
