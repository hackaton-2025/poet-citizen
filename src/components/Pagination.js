import Step from "./PaginationStep";

const Pagination = ({ steps, currentStep }) => {
  // TODO -- добавить генерацию массива, чтобы передавать только число шагов

  return (
    <div className="steps">
      { steps.map((item) => (
        <Step key={item.toString()} value={item} currentStep={currentStep} />
      )) }
    </div>
  );
};

export default Pagination;
