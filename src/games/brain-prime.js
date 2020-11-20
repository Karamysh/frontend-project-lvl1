// eslint-disable-next-line import/extensions
import getRandom from '../utilities/getRand.js';
// eslint-disable-next-line import/extensions
import launchGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = getRandom(0, 10);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [correctAnswer, String(question)];
};

const launchGameEven = () => launchGame(getGameData, task);

export default launchGameEven;
