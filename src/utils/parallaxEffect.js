import throttle from "./throttle";

const makeParallaxEffect = (e, elementRef, xMultiplier) => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let x = ((windowWidth / 2) - e.clientX) / windowWidth;
  let y = ((windowHeight / 2) - e.clientY) / windowHeight;

  // Умножители амплитуды
  // const xMultiplier = xMultiplier;
  const yMultiplier = 4 * xMultiplier;

  elementRef.style.transform = `translate(${x * xMultiplier}%, ${y * yMultiplier}px)`;
};

const makeThrottledParallax = ({e, elementRef, xMultiplier, ms}) => throttle(makeParallaxEffect(e, elementRef, xMultiplier), ms);

const resetPosition = (elementRef) => {
  elementRef.style.transform = `translate(0%, 0px)`;
}

export {
  makeParallaxEffect,
  makeThrottledParallax,
  resetPosition,
};
