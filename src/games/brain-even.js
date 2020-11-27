import getRandomNumber from '../utils.js';
import launchGame from '../index.js';

const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber();

  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [correctAnswer, String(question)];
};

const launchGameEven = () => launchGame(getGameData, TASK);

export default launchGameEven;
