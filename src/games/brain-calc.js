// eslint-disable-next-line import/extensions
import getRandom from '../utilities/getRand.js';
// eslint-disable-next-line import/extensions
import launchGame from '../index.js';

const task = 'What is the result of the expression?';

const getRandomMathSign = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandom(0, 2);
  return operators[randomIndex];
};

const calculate = (firstNumber, secondNumber, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      throw new Error(`Unknown operator '${operator}'!`);
  }
  return result;
};

const getGameData = () => {
  const firstNumber = getRandom(0, 10);
  const secondNumber = getRandom(0, 10);
  const operator = getRandomMathSign();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, operator).toString();
  return [correctAnswer, question];
};

const launchGameEven = () => launchGame(getGameData, task);

export default launchGameEven;
