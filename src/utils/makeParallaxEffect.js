const makeParallaxEffect = (e, elementRef) => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let x = ((windowWidth / 2) - e.clientX) / windowWidth;
  let y = ((windowHeight / 2) - e.clientY) / windowHeight;

  // Умножители амплитуды
  const xMultiplier = 10;
  const yMultiplier = 4 * xMultiplier;

  elementRef.style.transform = `translate(${x * xMultiplier}%, ${y * yMultiplier}px)`
};

export default makeParallaxEffect;
