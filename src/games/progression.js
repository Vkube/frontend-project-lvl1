import generateNumber from '../generate.js';
import playGame from '../index.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (startElem, length, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(startElem + i * step);
  }

  return progression;
};

const maxNumber = 100;

const getQuestionAndAnswer = () => {
  const progressionLength = 10;
  const maxProgressionStep = 10;

  const firstNum = generateNumber(0, maxNumber);
  const minProgressionStep = 1;
  const progressionStep = generateNumber(minProgressionStep, maxProgressionStep);
  const progression = generateProgression(firstNum, progressionLength, progressionStep);

  const indexOfAnswer = generateNumber(0, progressionLength - 1);
  const answer = String(progression[indexOfAnswer]);
  progression[indexOfAnswer] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const playProgressionGame = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playProgressionGame;