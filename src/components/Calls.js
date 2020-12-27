import Call from "./Call";
import emptyLogo from "./../images/emoji/requests__empty.svg"

const Calls = ({ calls }) => {

  return (
    <>
      { calls.length === 0 
        ? 
        <div className="requests__container">
          <img src={emptyLogo} alt="Эмоджи" className="requests__emoji requests__emoji_type_request-empty"></img>
          <h2 className="requests__title requests__title_type_request-empty ">
        Нет ни одной заявки в работе</h2>
        <p className="requests__subtitle requests__subtitle_type_empty-request">
        Составьте обращение - здесь повявится информация по вашей заявке
      </p>
      </div>
      
        : <div>
           <p className="requests__title">
          Ваши заявки
        </p>
            <ul className="requests__list">
              { calls.map((call, i) => (
                <Call
                  key={i}
                  emojiLocationCode={call.data.location.emoji}
                  emojiProblemCode={call.data.emoji}
                  emojiUrgencyCode={call.data.poem.urgency.emoji}
                  status={call.status}
                  poem={call.data.poem.text}
                  date={call.date}
                />
              )) }
            </ul>
        </div>
      }
    </>
  );
};

export default Calls;
