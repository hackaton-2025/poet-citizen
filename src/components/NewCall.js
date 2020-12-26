import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { locations, problems, urgencies } from '../configs/callsConfig';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Card from './Card';
import CheckoutButtons from './CheckoutButtons';
import Pagination from './Pagination';
import Popup from './Popup';

// TODO -- когда-нибудь реорганизовать конфиг с вызовами и переписать логику -- не нравится
// Возможно, тут следует использовать вложенные маршруты
const NewCall = ({ onCallAdd }) => {
  const history = useHistory();

  const userAddress = useContext(CurrentUserContext).address;

  const [promiseToCall, setPromiseToCall] = useState(null);
  const promiseToCallText = 'Отправьте заявку и мы вам перезвоним!';

  // Для пагинации
  const [currentStep, setCurrentStep] = useState(1);
  const setNextStep = () => setCurrentStep(currentStep + 1);
  const setPrevStep = () => setCurrentStep(currentStep - 1);

  // Стейты для отрисовки содержимого аккаунта
  // TODO -- объединить стейты в один
  const [isLocationChecked, setLocationState] = useState(false);
  const [isProblemChecked, setProblemState] = useState(false);
  const [isUrgencyChecked, setUrgencyState] = useState(false);

  // Стейт для хранения выбранных параметров запроса -- меняем при нажатии на карточку
  const [checkedCallParams, setCheckedCallParams] = useState({});

  // Стейты для хранения запросов, отфильтрованных по параметру
  // TODO -- объединить стейты в один
  const [problemsForLocation, setProblemsForLocation] = useState([]);
  const [checkedProblem, setCheckedProblem] = useState({});
  const [finalProblem, setFinalProblem] = useState({});

  const handleLocationCheck = (checkedLocation) => {
    setCheckedCallParams({...checkedCallParams, location: checkedLocation});
  };

  const handleProblemCheck = (checkedProblem) => {
    setCheckedCallParams({...checkedCallParams, problem: checkedProblem});
    if (checkedProblem === 'Прочее') {
      setPromiseToCall(promiseToCallText);
    }
  };

  const handleUrgencyCheck = (checkedUrgency) => {
    setCheckedCallParams({...checkedCallParams, urgency: checkedUrgency});
  };

  const handleLocationConfirm = () => {
    setProblemsForLocation(problems.filter((problem) => problem.location.name === checkedCallParams.location));
    setLocationState(true);
    setNextStep();
  };

  const handleProblemConfirm = () => {
    setCheckedProblem(problemsForLocation.filter((problem) => problem.name === checkedCallParams.problem)[0]);
    setProblemState(true);
    setNextStep();
  };

  const handleUrgencyConfirm = () => {
    setFinalProblem({
      ...checkedProblem,
      poem: checkedProblem.poem.filter((poem) => poem.urgency.name === checkedCallParams.urgency)[0],
    });
    setUrgencyState(true);
    setNextStep();
  };

  const [isInfoPopupOpen, setInfoPopupState] = useState(false);

  const handleSend = () => {
    onCallAdd(finalProblem);
    setInfoPopupState(true);
  };
  
  const redirectToCalls = () => history.push('/me/calls');

  const handleBackToLocationCheck = () => {
    setLocationState(false);
    setPrevStep();
  };

  const handleBackToProblemCheck = () => {
    setProblemState(false);
    setPrevStep();
  };

  const handleBackToUrgencyCheck = () => {
    setUrgencyState(false);
    setPrevStep();
  }

  const renderCards = ({ cards, cardSizeModificator, handleCardClick, checkedCard }) => {
    if (cards) {
      return (
        cards.map((card, i) => (
            <Card
              key={i}
              imageCode={card.emoji}
              cardTitle={card.name}
              sizeModificator={cardSizeModificator}
              onCardClick={handleCardClick}
              checkedCard={checkedCard}
            />
          )
        )
      );
    }
  };

  return (
    <>
      <Pagination steps={[1, 2, 3]} currentStep={currentStep} />
      { Boolean(!isLocationChecked) &&
        <>
          <h2 className="page__title">Выберите место</h2>
          <div className="new-call__cards new-call__cards_type_place">
            { renderCards({
              cards: locations,
              cardSizeModificator: "card_size_m",
              handleCardClick: handleLocationCheck,
              checkedCard: checkedCallParams.location,
            }) }
          </div>
          <CheckoutButtons
            isPrevButton={false}
            isNextButtonActive={checkedCallParams.location}
            onNextButtonClick={handleLocationConfirm}
          />
        </>
      }
      { Boolean(isLocationChecked & !isProblemChecked) &&
        <>
          <h2 className="page__title">Выберите проблему</h2>
          <div className="new-call__cards new-call__cards_type_problem">
            { renderCards({
              cards: problemsForLocation,
              cardSizeModificator: "card_size_s",
              handleCardClick: handleProblemCheck,
              checkedCard: checkedCallParams.problem,
            }) }
          </div>
          <CheckoutButtons
            isPrevButton={true}
            onPrevButtonClick={handleBackToLocationCheck}
            isNextButtonActive={checkedCallParams.problem}
            onNextButtonClick={handleProblemConfirm}
          />
        </>
      }
      { Boolean(isProblemChecked & !isUrgencyChecked) &&
        <>
          <h2 className="page__title">Выберите срочность</h2>
          <div className="new-call__cards new-call__cards_type_actuality">
            { renderCards({
              cards: urgencies,
              cardSizeModificator: "card_size_l",
              handleCardClick: handleUrgencyCheck,
              checkedCard: checkedCallParams.urgency,
            }) }
          </div>
          <CheckoutButtons
            isPrevButton={true}
            onPrevButtonClick={handleBackToProblemCheck}
            isNextButtonActive={checkedCallParams.urgency}
            onNextButtonClick={handleUrgencyConfirm}
          />
        </>
      }
      { Boolean(isLocationChecked & isProblemChecked & isUrgencyChecked) &&
        <>
          <h2 className="page__title">Ваша заявка</h2>
          <div className="new-call__cards new-call__cards_type_final">
            <Card cardTitle="Место" imageCode={finalProblem.location.emoji} sizeModificator="card_size_xs" />
            <Card cardTitle="Проблема" imageCode={finalProblem.emoji} sizeModificator="card_size_xs" />
            <Card cardTitle="Срочность" imageCode={finalProblem.poem.urgency.emoji} sizeModificator="card_size_xs" />
            <Card cardTitle="Адрес" cardAddress={userAddress} sizeModificator="card_size_xs" />
            <Card cardTitle="Описание" cardSign={finalProblem.poem.author} cardPoem={finalProblem.poem.text}
                  sizeModificator="card_size_xl" cardPromise={promiseToCall}
            />
          </div>
          <CheckoutButtons
            isPrevButton={true}
            onPrevButtonClick={handleBackToUrgencyCheck}
            isNextButtonActive={true}
            onNextButtonClick={handleSend}
            nextButtonType="submit"
          />
        </>
      }
      <Popup
        isOpen={isInfoPopupOpen}
        contentModificator="popup__container_content_dialog"
        popupTitle="Ваша заявка успешно отправлена!"
        isRedirect={true}
        redirectText="Все завки"
        onClose={redirectToCalls}
      />
    </>
  )
};

export default NewCall;
