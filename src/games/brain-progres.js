// eslint-disable-next-line import/extensions
import getRandom from '../utilities/getRand.js';
// eslint-disable-next-line import/extensions
import launchGame from '../index.js';

const task = 'What number is missing in the progression?';

const getGameData = () => {
  const progLength = getRandom(5, 10);
  const progStep = getRandom(1, 9);
  const progStartAt = getRandom(1, 100);
  const missingIndex = getRandom(0, progLength);
  const resultArray = [];
  for (let i = 1; i <= progLength; i += 1) {
    resultArray.push(progStartAt + (progStep * i));
  }
  const correctAnswer = resultArray[missingIndex];
  resultArray[missingIndex] = '..';
  const question = `${resultArray.join(' ')}`;
  return [String(correctAnswer), question];
};

const launchGameEven = () => launchGame(getGameData, task);

export default launchGameEven;
