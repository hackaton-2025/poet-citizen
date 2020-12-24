import Call from "./Call"

const Calls = ({ calls }) => {

  return (
    <>
      { calls.length === 0 
        ? <p className="requests__title">
          Нет ни одной заявки в работе :(
        </p>
        : <ul className="requests__list">
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
      }
    </>
  );
};

export default Calls;
