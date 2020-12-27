import Popup from "./Popup";

function NewsPopup({ newsItem, isOpen, onClose }) {
  
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      contentModificator="popup__container_content_news"
      popupTitle="Новости"
    >
      <p className="popup__date">{newsItem && newsItem.date}</p>
      <p className="popup__subtitle">{newsItem && newsItem.title}</p>
        { newsItem && newsItem.text.map((item) => (
          <p className="popup__text">
            {item}
          </p>
        )) }
    </Popup>
  );
}

export default NewsPopup;
