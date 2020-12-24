import { useEffect, useState } from "react";
import loadImage from "../utils/loadImage";
import renderPoem from "../utils/renderPoem";

const Call = ({ emojiLocationCode, emojiProblemCode, emojiUrgencyCode, status, poem, date }) => {

  // TODO -- разобраться с использованием ассинхронных операций в цикле + setState
  const [emojiLocationPath, setEmojiLocationPath] = useState(null);
  const [emojiProblemPath, setEmojiProblemPath] =useState(null);
  const [emojiUrgencyPath, setEmojiUrgencyPath] = useState(null);

  useEffect(() => {
    loadImage(emojiLocationCode, setEmojiLocationPath);
    loadImage(emojiProblemCode, setEmojiProblemPath);
    loadImage(emojiUrgencyCode, setEmojiUrgencyPath);
  }, []);
  

  return (
    <li className="requests__item">
      <div className="requests__header">
        <div className="requests__name">
            <img src={emojiLocationPath} alt="Эмоджи" />
            <img src={emojiProblemPath} alt="Эмоджи" />
            <img src={emojiUrgencyPath} alt="Эмоджи" />
        </div>
        <p className="requests__status">{status}</p>
      </div>
      <div className="requests__poem">
        { renderPoem(poem, "request__poem-line") }
      </div>
      <p className="requests__date">
        {`Обращение составлено: ${date}`}
      </p>
    </li>
  );
};
  
  export default Call;