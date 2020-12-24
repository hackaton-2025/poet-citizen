const renderPoem = (poem, lineClassName) => {
  const textArray = poem.split('\n')
  return textArray.map((line, i) => (
    <p key={i} className={lineClassName}>{line}</p>
  ));
}

export default renderPoem;
