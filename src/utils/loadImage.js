const loadImage = (imageCode, setState) => {
  import(`../images/emoji/${imageCode}.png`)
    .then((image) => {
      setState(image.default);
      Promise.resolve();
    })
    .catch((err) => console.log(err));
};

export default loadImage;
