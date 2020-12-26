import { useEffect } from "react";

const Pagination = ({ stepsNum }) => {
  const Step = (i) => {
    console.log(toString(i))
    return (
      <>
        <div className="steps__track"></div>
        <div className="steps__number-container">
          <p className="steps__number">{i+1}</p>
        </div>
      </>
    );
  };

  const renderSteps = () => {
    for (let i=2; i <= stepsNum; i++) {
      // addStep(i);
    };
  };

  const steps = [];

  useEffect(() => {
    
  })

  for (let i=2; i<= stepsNum; i++) {

  }
  console.log(steps)

  // TODO -- переделать на динамическое число шагов -- требуется изменение стилей, оставим на потом
  return (
    <div className="steps">
      <div className="steps__number-container">
        <p className="steps__number">1</p>
      </div>
      { steps.map((item, i) => (
        <Step key={i+1} i={i} />
      )) }
    </div>
  );
};

export default Pagination;
