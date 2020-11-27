import getRandomNumber from '../utils.js';
import launchGame from '../index.js';

const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN_NUMBER = 0;
const MAX_NUMBER = 10;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [correctAnswer, String(question)];
};

const launchGameEven = () => launchGame(getGameData, TASK);

export default launchGameEven;
