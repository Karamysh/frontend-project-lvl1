import promptly from 'promptly';

const numberOfRounds = 3;

const launchGame = async (getGameData, task) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  let roundNumber = 0;
  while (roundNumber < numberOfRounds) {
    const [rightAnswer, question] = getGameData();
    console.log(`Question: ${question}`);
    // eslint-disable-next-line no-await-in-loop
    const userAnswer = await promptly.prompt('Your answer: ');
    if (userAnswer === rightAnswer) {
      roundNumber += 1;
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      break;
    }
  }
  if (roundNumber === numberOfRounds) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!)`);
  }
};

export default launchGame;
