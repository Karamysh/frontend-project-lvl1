const getRandomNumber = (min = 0, max = 100) => {
  const randNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randNum);
};

export default getRandomNumber;
