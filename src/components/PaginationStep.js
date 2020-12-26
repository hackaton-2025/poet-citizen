import cn from 'classnames';

const Step = ({value, currentStep}) => {

  const className = cn(
    'steps__number-container',
    {
      'steps__number-container_type_disabled': value > currentStep,
      'steps__number-container_type_active': value === currentStep,
      'new-call__number-container_type_complete': value < currentStep,
    },
  )

  // TODO -- переделать -- требуется изменение стилей, оставим на потом
  if (value === 1) {
    return (
      <div className={className}>
        <p className="steps__number">{value}</p>
      </div>
    )
  } else {
    return (
      <>
        <div className="steps__track"></div>
        <div className={className}>
          <p className="steps__number">{value}</p>
        </div>
      </>
    );
  }
};

export default Step;
