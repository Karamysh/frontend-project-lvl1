// eslint-disable-next-line import/extensions
import getRandomNumber from '../utilities/getRand.js';
// eslint-disable-next-line import/extensions
import launchGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => ((num1 % num2) ? getGcd(num2, num1 % num2) : Math.abs(num2));

const getGameData = () => {
  const num1 = getRandomNumber(0, 30);
  const num2 = getRandomNumber(0, 30);

  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [correctAnswer, question];
};

const launchGameEven = () => launchGame(getGameData, task);

export default launchGameEven;
