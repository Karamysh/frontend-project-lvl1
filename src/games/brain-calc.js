import launchGame from '../index.js';
import getRandomNumber from '../utils.js';

const TASK = 'What is the result of the expression?';

const OPERATORS = ['+', '-', '*'];

const getRandomMathSign = () => {
  const randomIndex = getRandomNumber(0, OPERATORS.length - 1);
  return OPERATORS[randomIndex];
};

const calculate = (firstNumber, secondNumber, operator) => {
  let result;
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
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const operator = getRandomMathSign();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, operator).toString();
  return [correctAnswer, question];
};

const launchGameEven = () => launchGame(getGameData, TASK);

export default launchGameEven;
