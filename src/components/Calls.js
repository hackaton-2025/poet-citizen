const Calls = ({ calls }) => {
console.log(calls)
  return (
    <div className="requests__list">
      { calls.length === 0 
        ? <h1 className="requests__title">
          Нет ни одной заявки в работе :(
        </h1>
        : <div className="requests__item">
          <div className="requests__header">
            <p className="requests__name">&#129314; &#129314;</p>
            <p className="requests__status">Заявка обрабатывается</p>
          </div>
          <p className="requests__text">
            Тогда услышал я (о диво!) запах скверный, Как будто тухлое
            разбилось яицо, Иль карантинный страж курил жаровней серной.
            Я, нос себе зажав, отворотил лицо.
          </p>
          <p style={{color: 'red'}}>Да, это не Ваша заявка, но мы над эти работаем!</p>
          <p className="requests__date">
            Обращение составлено: 12.03.19 – 12:33
          </p>
        </div>
      }
    </div>
  );
};

export default Calls;
