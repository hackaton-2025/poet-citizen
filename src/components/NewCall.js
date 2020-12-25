import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { locations, problems, urgencies } from '../configs/callsConfig';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Card from './Card';
import CheckoutButtons from './CheckoutButtons';

// TODO -- когда-нибудь реорганизовать конфиг с вызовами и переписать логику -- не нравится
// Возможно, тут следует использовать вложенные маршруты
const NewCall = ({ onCallAdd }) => {
  const history = useHistory();

  const userAddress = useContext(CurrentUserContext).address;

  const [promiseToCall, setPromiseToCall] = useState(null);
  const promiseToCallText = 'Отправьте заявку и мы вам перезвоним!';

  // Стейты для отрисовки содержимого аккаунта
  const [isLocationChecked, setLocationState] = useState(false);
  const [isProblemChecked, setProblemState] = useState(false);
  const [isUrgencyChecked, setUrgencyState] = useState(false);

  // Стейт для хранения выбранных параметров запроса -- меняем при нажатии на карточку
  const [checkedCallParams, setCheckedCallParams] = useState({});

  // Стейт для хранения запросов, отфильтрованных по локации (предыдущий использовать не получится)
  const [problemsForLocation, setProblemsForLocation] = useState([]);

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
  };

  const handleProblemConfirm = () => {
    setFinalProblem(problemsForLocation.filter((problem) => problem.name === checkedCallParams.problem));
    setProblemState(true);
  };

  const handleUrgencyConfirm = () => {
    if (!checkedCallParams.urgency) {
      setFinalProblem({
        ...finalProblem[0],
        poem: finalProblem[0].poem.filter((poem) => poem.urgency.name === checkedCallParams.urgency)[0],
      });
    } else {
      setFinalProblem(problemsForLocation.filter((problem) => problem.name === checkedCallParams.problem));
      setFinalProblem({
        ...finalProblem[0],
        poem: finalProblem[0].poem.filter((poem) => poem.urgency.name === checkedCallParams.urgency)[0],
      });
    }
    setUrgencyState(true);
  };

  // TODO -- добавить кнопки назад

  const handleSend = () => {
    // TODO -- добавить попап
    alert('Ваша заявка принята!');
    onCallAdd(finalProblem);
    history.push('/me/calls');
  };

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
    <div className="new-call__steps-container">
      <div className="new-call__number-container">
        <p className="new-call__step-number">1</p>
      </div>
      <div className="new-call__step-track"></div>
      <div className="new-call__number-container">
        <p className="new-call__step-number">2</p>
      </div>
      <div className="new-call__step-track"></div>
      <div className="new-call__number-container">
        <p className="new-call__step-number">3</p>
      </div>
    </div>
      { Boolean(!isLocationChecked) &&
        <>
          <h2 className="page__title">Составьте новое обращение</h2>
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
            onPrevButtonClick={() => setLocationState(false)}
            isNextButtonActive={checkedCallParams.problem}
            onNextButtonClick={handleProblemConfirm}
          />
        </>
      }
      { Boolean(isProblemChecked & !isUrgencyChecked) &&
        <>
          <h2 className="page__title">Определите срочность проблемы</h2>
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
            onPrevButtonClick={() => setProblemState(false)}
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
            onPrevButtonClick={() => setUrgencyState(false)}
            isNextButtonActive={true}
            onNextButtonClick={handleSend}
            nextButtonType="submit"
          />
        </>
      }
    </>
  )
};

export default NewCall;
