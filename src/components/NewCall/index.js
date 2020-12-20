import './styles.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header.js';
import Navigation from '../Navigation.js';
import plungerLogo from '../../images/create_call_plunger.svg';
import cockroachLogo from '../../images/create_call_cockroach.svg';
import heatLogo from '../../images/create_call_heat.svg';
import floodLogo from '../../images/create_call_flood.svg';
import lampLogo from '../../images/create_call_lamp.svg';
import frozeLogo from '../../images/create_call_froze.svg';
import craneLogo from '../../images/create_call_crane.svg';
import flashLogo from '../../images/create_call_flash.svg';
import doorphoneLogo from '../../images/create_call_doorphone.svg';
import angryLogo from '../../images/create_call_angry.svg';
import disappointmentLogo from '../../images/create_call_disappointment.svg';
// Всех этих импортов не будет!!

const NewCall = () => {
  const history = useHistory();
  // TODO -- топорно, передалать!!
  const [isTerritoryChecked, setTerritoryState] = useState(false);
  const [isProblemChecked, setProblemState] = useState(false);
  const [isUrgencyChecked, setUrgencyState] = useState(false);

  const handleTerritoryCheck = () => {
    setTerritoryState(true);
  }

  const handleProblemCheck = () => {
    setProblemState(true);
  }

  const handleUrgencyCheck = () => {
    setUrgencyState(true);
  }

  const handleSend = () => {
    alert('Ваша заявка принята!');
    history.push('/me');
  }

  return (
    <div className="page__narrow page__full-height">
      <Header />
      <main className="new-call page__container">
        <Navigation />
        <section className="page__content">
        {/* TODO -- почему-то здесь при использовании оператора && вместо страниц, для которых
        условие ложно, отображаются нули. Разобраться. */}
          { !isTerritoryChecked
            ? <>
              <h2 className="page__title">Составьте новое обращение</h2>
              <p className="page__subtitle">Выберите место где возникла проблема</p>
              <div className="new-call__cards new-call__cards_type_place">
                <button type="button" className="card card_type_place">
                  <img src="#" alt="#" className="card__emoji"></img>
                  <p className="card__title"> Кваритра</p>
                </button>
                <button type="button" className="card card_type_place">
                  <img src="#" alt="#" className="card__emoji"></img>
                  <p className="card__title">Подъезд</p>
                </button>
                <button type="button" className="card card_type_place">
                  <img src="#" alt="#" className="card__emoji"></img>
                  <p className="card__title">Двор</p>
                </button>
              </div>
              <button type="button" className="new-call__next-button" onClick={handleTerritoryCheck}>
                <p className="button__title">Далее</p>
              </button>
            </>
            : ''
          }
          { isTerritoryChecked & !isProblemChecked
            ? <>
              <h2 className="page__title">Выберите проблему</h2>
              <p className="page__subtitle"></p>
              <div className="new-call__cards new-call__cards_type_problem">
                <button type="button" className="card card_type_problem">
                  <img src={plungerLogo} alt="#" className="card__emoji"></img>
                  <p className="card__title">Засор канализации</p>
                </button>
                <button type="button" className="card card_type_problem">
                  <img src={cockroachLogo} alt="#" className="card__emoji"></img>
                  <p className="card__title">Требуется дизенсекция</p>
                </button>
                <button type="button" className="card card_type_problem">
                  <img src={heatLogo} alt="#" className="card__emoji"></img>
                  <p className="card__title">Высокая температура</p>
                </button>
                <button type="button" className="card card_type_problem">
                  <img src={floodLogo} alt="#" className="card__emoji"></img>
                  <p className="card__title">Протечка трубы</p>
                </button>
                <button type="button" className="card card_type_problem">
                  <img src={lampLogo} alt="#" className="card__emoji"></img>
                  <p className="card__title">Перегорела лампочка</p>
                </button>
                <button type="button" className="card card_type_problem">
                  <img src={frozeLogo} alt="#" className="card__emoji"></img>
                  <p className="card__title">Низкая температура</p>
                </button>
                <button type="button" className="card card_type_problem">
                  <img src={craneLogo} alt="#" className="card__emoji"></img>
                  <p className="card__title">Отсутствует вода</p>
                </button>
                <button type="button" className="card card_type_problem">
                  <img src={flashLogo} alt="#" className="card__emoji"></img>
                  <p className="card__title">Отсутствует эл. питание</p>
                </button>
                <button type="button" className="card card_type_problem">
                  <img src={doorphoneLogo} alt="#" className="card__emoji"></img>
                  <p className="card__title">Сломался домофон</p>
                </button>
              </div>
              <button type="button" className="new-call__next-button" onClick={handleProblemCheck}>
                <p className="button__title">Далее</p>
              </button>
            </>
            : ''
          }
          { isProblemChecked & !isUrgencyChecked
            ? <>
              <h2 className="page__title">Определите срочность проблемы</h2>
              <p className="page__subtitle"></p>
              <div className="new-call__cards new-call__cards_type_actuality">
                <button type="button" className="card card_type_actuality">
                  <img src={angryLogo} alt="#" className="card__emoji card__emoji_type_actuality"></img>
                  <p className="card__title card__title_type_actuality">Срочно</p>
                </button>
                <button type="button" className="card card_type_actuality">
                  <img src={disappointmentLogo} alt="#" className="card__emoji card__emoji_type_actuality"></img>
                  <p className="card__title card__title_type_actuality">Несрочно</p>
                </button>
              </div>
              <button type="button" className="new-call__next-button" onClick={handleUrgencyCheck}>
                <p className="button__title">Далее</p>
              </button>
            </>
            : ''
          }
          { isTerritoryChecked & isProblemChecked & isUrgencyChecked
            ? <>
              <h2 className="int-title">Определите срочность проблемы</h2>
              <p className="hint-subtitle"></p>
              <div className="new-call__cards bew-call__cards_type_call">
              <div className="new-call__call">
                <div className="new-call__call-element">
                  <h3 className="new-call__call-title">Место</h3>
                  <img src="#" alt="" className="new-call__call-image new-call__call-image_type_place"></img>
                </div>
                <div className="new-call__call-element">
                  <h3 className="new-call__call-title">Проблема</h3>
                  <img src="#" alt="" className="new-call__call-image new-call__call-image_type_problem"></img>
                </div>
                <div className="new-call__call-element">
                  <h3 className="new-call__call-title">Срочность</h3>
                  <img src="#" alt="" className="new-call__call-image new-call__call-image_type_actuality"></img>
                </div>
                <div className="new-call__call-element new-call__call-element_type_adress">
                  <h3 className="new-call__call-title">Адрес</h3>
                  <p className="new-call__call-description new-call__call-description_type_adress">Заглушка</p>
                </div>
                <div className="new-call__call-element new-call__call-element_type_poem">
                  <h3 className="new-call__call-title">Описание</h3>
                  <p className="new-call__call-description new-call__call-description_type_poem">Заглушка</p>
                </div>
              </div>
              </div>
              <button type="submit" className="new-call__next-button" onClick={handleSend}>
                <p className="button__title">Отправить</p>
              </button>
            </>
            : ''
          }
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  )
};

export default NewCall;
