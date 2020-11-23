import getRandomNumber from '../utilities/utils.js';
import launchGame from '../index.js';

const TASK = 'Find the greatest common divisor of given numbers.';
const MIN_NUMBER = 0;
const MAX_NUMBER = 30;

const getGcd = (num1, num2) => ((num1 % num2) ? getGcd(num2, num1 % num2) : Math.abs(num2));

const getGameData = () => {
  const num1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const num2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [correctAnswer, question];
};

const launchGameEven = () => launchGame(getGameData, TASK);

export default launchGameEven;
