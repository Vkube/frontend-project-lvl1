import generateNumber from '../utils.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const maxNumber = 1000;

const getQuestionAndAnswer = () => {
  const question = generateNumber(0, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const playEvenGame = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playEvenGame;