import getRandom from './getRand.js';
import launchGame from './index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getGameData = () => {
  const question = getRandom();

  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [correctAnswer, String(question)];
};

const launchGameEven = () => launchGame(getGameData, task);

export default launchGameEven;