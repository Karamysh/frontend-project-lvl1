import getRandomNumber from '../utilities/utils.js';
import launchGame from '../index.js';

const TASK = 'What number is missing in the progression?';
const MIN = {
  START: 1,
  LENGTH: 5,
  STEP: 1,
};
const MAX = {
  START: 100,
  LENGTH: 10,
  STEP: 9,
};

const PROGRESSION_LENGTH = getRandomNumber(MIN.LENGTH, MAX.LENGTH);

const progresArray = () => {
  const progStep = getRandomNumber(MIN.STEP, MAX.STEP);
  const progStartAt = getRandomNumber(MIN.START, MAX.START);
  const resultArray = [];
  for (let i = 1; i <= PROGRESSION_LENGTH; i += 1) {
    resultArray.push(progStartAt + (progStep * i));
  }
  return resultArray;
};

const getGameData = () => {
  const progression = progresArray();
  const missingIndex = getRandomNumber(0, PROGRESSION_LENGTH);
  const correctAnswer = progression[missingIndex];
  progression[missingIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [String(correctAnswer), question];
};

const launchGameEven = () => launchGame(getGameData, TASK);

export default launchGameEven;
