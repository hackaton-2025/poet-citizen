const throttle = (callback, ms) => {
  let waiting = false;
  return (...rest) => {
    if (!waiting) {
      callback.apply(this, rest);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, ms);
    }
  };
};

export default throttle;
