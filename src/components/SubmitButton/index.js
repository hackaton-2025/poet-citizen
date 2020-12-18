import './styles.css';

export const SubmitButton = ({
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
