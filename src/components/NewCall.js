import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { locations, problems, urgencies } from '../configs/callsConfig';
import Card from './Card';

const NewCall = ({ onAdd }) => {
  const history = useHistory();

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
    setFinalProblem({
      ...finalProblem[0],
      poem: finalProblem[0].poem.filter((poem) => poem.urgency.name === checkedCallParams.urgency)[0],
    });
    setUrgencyState(true);
  };

  // TODO -- добавить кнопки назад

  const handleSend = () => {
    alert('Ваша заявка принята!');
    onAdd(false);
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
    
// TODO -- почему-то здесь при использовании оператора && вместо страниц, для которых
//  условие ложно, отображаются нули. Разобраться.
  return (
    <>
      { Boolean(!isLocationChecked) &&
        <>
          <h2 className="page__title">Составьте новое обращение</h2>
          <p className="page__subtitle">Выберите место где возникла проблема</p>
          <div className="new-call__cards new-call__cards_type_place">
            { renderCards({
                cards: locations,
                cardSizeModificator: "card_size_m",
                handleCardClick: handleLocationCheck,
                checkedCard: checkedCallParams.location,
              })
            }
          </div>
          <button type="button" className="new-call__next-button" onClick={handleLocationConfirm}>
            <p className="button__title">Далее</p>
          </button>
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
          <button type="button" className="new-call__next-button" onClick={handleProblemConfirm}>
            <p className="button__title">Далее</p>
          </button>
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
          <button type="button" className="new-call__next-button" onClick={handleUrgencyConfirm}>
            <p className="button__title">Далее</p>
          </button>
        </>
      }
      { Boolean(isLocationChecked & isProblemChecked & isUrgencyChecked) &&
        <>
          <h2 className="page__title">Ваша заявка</h2>
          <div className="new-call__cards new-call__cards_type_final">
            <Card cardTitle="Место" imageCode={finalProblem.location.emoji} sizeModificator="card_size_xs" />
            <Card cardTitle="Проблема" imageCode={finalProblem.emoji} sizeModificator="card_size_xs" />
            <Card cardTitle="Срочность" imageCode={finalProblem.poem.urgency.emoji} sizeModificator="card_size_xs" />
            <Card cardTitle="Адрес" cardText="Здесь будет адрес" sizeModificator="card_size_xs" />
            <Card cardTitle="Описание" cardSign={finalProblem.poem.author} cardPoem={finalProblem.poem.text}
                  sizeModificator="card_size_xl"
            />
          </div>
          <button type="submit" className="new-call__next-button" onClick={handleSend}>
            <p className="button__title">Отправить</p>
          </button>
        </>
      }
    </>
  )
};

export default NewCall;
