const generateNumber = (min, max) => (min
  + Math.floor(Math.random() * (max - min + 1)));

export default generateNumber;