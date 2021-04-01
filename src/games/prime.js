import generateNumber from '../generate.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const maxNumber = 100;

const getQuestionAndAnswer = () => {
  const question = generateNumber(0, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const playPrimeGame = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playPrimeGame;