const makeTwoSignsFromOne = (value) => {
  if (value.toString().length === 1) {
    return `0${value}`
  } else {
    return value
  }
};

const formatDate = (date) => {
  const day = makeTwoSignsFromOne(date.getDate());
  const month = makeTwoSignsFromOne(date.getMonth() + 1);
  const hours = makeTwoSignsFromOne(date.getHours());
  const minutes = makeTwoSignsFromOne(date.getMinutes());
  return `${day}.${month}.${date.getFullYear()} – ${hours}:${minutes}`
};

export default formatDate;