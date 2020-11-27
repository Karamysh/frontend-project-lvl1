import getRandomNumber from '../utils.js';
import launchGame from '../index.js';

const TASK = 'What number is missing in the progression?';
const PROG_VALUES = {
  STEP: {
    MIN: 1,
    MAX: 9,
  },
  START: {
    MIN: 1,
    MAX: 100,
  },
  LENGTH: {
    MIN: 5,
    MAX: 10,
  },
};

const PROGRESSION_LENGTH = getRandomNumber(PROG_VALUES.LENGTH.MIN, PROG_VALUES.LENGTH.MAX);

const getProgression = () => {
  const progStep = getRandomNumber(PROG_VALUES.STEP.MIN, PROG_VALUES.STEP.MAX);
  const progStartAt = getRandomNumber(PROG_VALUES.START.MIN, PROG_VALUES.START.MAX);
  const result = [];
  for (let i = 1; i <= PROGRESSION_LENGTH; i += 1) {
    result.push(progStartAt + (progStep * i));
  }
  return result;
};

const getGameData = () => {
  const progression = getProgression();
  const missingIndex = getRandomNumber(0, PROGRESSION_LENGTH);
  const correctAnswer = progression[missingIndex];
  progression[missingIndex] = '..';
  const question = progression.join(' ');
  return [String(correctAnswer), question];
};

const launchGameEven = () => launchGame(getGameData, TASK);

export default launchGameEven;
