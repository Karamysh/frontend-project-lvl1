// eslint-disable-next-line import/extensions
import getRandomNumber from '../utilities/getRand.js';
// eslint-disable-next-line import/extensions
import launchGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber();

  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [correctAnswer, String(question)];
};

const launchGameEven = () => launchGame(getGameData, task);

export default launchGameEven;
