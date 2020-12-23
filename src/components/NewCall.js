import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { locations, problems, urgencies } from '../configs/callsConfig';
import Card from './Card';

const NewCall = ({ onAdd }) => {
  const history = useHistory();

  // Стейты для отрисовки содержимого аккаунта
  const [isTerritoryChecked, setTerritoryState] = useState(false);
  const [isProblemChecked, setProblemState] = useState(false);
  const [isUrgencyChecked, setUrgencyState] = useState(false);

  // const [checkedProblem, setProblem] = useState({});

  // Стейт для хранения отфильтрованных запросов
  const [filteredProblems, setProblems] = useState(problems);

  // Стейт для хранения запросов, отфильтрованных по локации (предыдущий использовать не получится)
  const [problemsForLocation, setProblemsForLocation] = useState([]);

  const [finalProblem, setFinalProblem] = useState({});

  const handleTerritoryCheck = (checkedLocation) => {
    setProblemsForLocation(filteredProblems.filter((problem) => problem.location.name === checkedLocation));
    setProblems(problemsForLocation);
  };

  const handleProblemCheck = (checkedProblem) => {
    setProblems(problemsForLocation.filter((problem) => problem.name === checkedProblem));
  };

  const handleUrgencyCheck = (checkedUrgency) => {
    console.log(filteredProblems)
    setFinalProblem({
      ...filteredProblems[0],
      poem: filteredProblems[0].poem.filter((poem) => poem.urgency.name === checkedUrgency)[0],
    });
    // setProblems({
    //   ...filteredProblems,
    //   poem: filteredProblems.poem.filter((poem) => poem.urgency.name === checkedUrgency),
    // });
  };

  console.log(finalProblem)

  const handleSend = () => {
    alert('Ваша заявка принята!');
    onAdd(false);
    history.push('/me/calls');
  };

  const renderCards = ({ cards, cardSizeModificator, handleCardClick }) => {
    if (cards) {
      return (
        cards.map((card, i) => (
            <Card
              key={i}
              imageCode={card.emoji}
              cardTitle={card.name}
              sizeModificator={cardSizeModificator}
              onCardClick={handleCardClick}
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
      { !isTerritoryChecked
        ? <>
          <h2 className="page__title">Составьте новое обращение</h2>
          <p className="page__subtitle">Выберите место где возникла проблема</p>
          <div className="new-call__cards new-call__cards_type_place">
            { renderCards({ cards: locations, cardSizeModificator: "card_size_m", handleCardClick: handleTerritoryCheck }) }
          </div>
          <button type="button" className="new-call__next-button" onClick={() => setTerritoryState(true)}>
            <p className="button__title">Далее</p>
          </button>
        </>
        : ''
      }
      { isTerritoryChecked & !isProblemChecked
        ? <>
          <h2 className="page__title">Выберите проблему</h2>
          <div className="new-call__cards new-call__cards_type_problem">
            { renderCards({ cards: problemsForLocation, cardSizeModificator: "card_size_s", handleCardClick: handleProblemCheck }) }
          </div>
          <button type="button" className="new-call__next-button" onClick={() => setProblemState(true)}>
            <p className="button__title">Далее</p>
          </button>
        </>
        : ''
      }
      { isProblemChecked & !isUrgencyChecked
        ? <>
          <h2 className="page__title">Определите срочность проблемы</h2>
          <div className="new-call__cards new-call__cards_type_actuality">
            { renderCards({ cards: urgencies, cardSizeModificator: "card_size_l", handleCardClick: handleUrgencyCheck }) }
          </div>
          <button type="button" className="new-call__next-button" onClick={() => setUrgencyState(true)}>
            <p className="button__title">Далее</p>
          </button>
        </>
        : ''
      }
      { isTerritoryChecked & isProblemChecked & isUrgencyChecked
        ? <>
          <h2 className="page__title">Ваша заявка</h2>
          <div className="new-call__cards new-call__cards_type_final">
            <Card cardTitle="Место" imageCode={finalProblem.location.emoji} sizeModificator="card_size_xs" />
            <Card cardTitle="Проблема" imageCode={finalProblem.emoji} sizeModificator="card_size_xs" />
            <Card cardTitle="Срочность" imageCode={finalProblem.poem.urgency.emoji} sizeModificator="card_size_xs" />
            <Card cardTitle="Адрес" cardText="Здесь будет адрес" sizeModificator="card_size_xs" />
            <Card cardTitle="Описание" cardSign={finalProblem.poem.author} cardPoem={finalProblem.poem.text} sizeModificator="card_size_xl" />
          </div>
          <button type="submit" className="new-call__next-button" onClick={handleSend}>
            <p className="button__title">Отправить</p>
          </button>
        </>
        : ''
      }
    </>
  )
};

export default NewCall;
