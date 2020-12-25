import renderPoem from "../utils/renderPoem";

const NewsItem = ({ newsItem, onClick }) => {

  const handleNewsItemOpen = () => {
    onClick(newsItem);
  }

  return (
    <li className="section__item section__item_news">
      <p className="section__date">{newsItem.date}</p>
      <h3 className="section__subtitle section__subtitle_news">
        {newsItem.title}
      </h3>
      <p className="section__text">
        { renderPoem(newsItem.poem, "section__poem-line") }
      </p>
      <p className="section__real-text"></p>
      <button className="section__link" type="button" onClick={handleNewsItemOpen}>
        Подробнее
      </button>
    </li>
  );
};

export default NewsItem;
