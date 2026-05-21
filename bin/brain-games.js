#!/usr/bin/env node

import readlineSync from 'readline-sync';
import playEvenGame from '../src/games/even.js';
import playCalculatorGame from '../src/games/calculator.js';
import playGreaterCommonDivisorGame from '../src/games/greaterNumberDivision.js';
import playProgressionGame from '../src/games/progression.js';
import playPrimeGame from '../src/games/prime.js';

const games = {
  even: playEvenGame,
  calculator: playCalculatorGame,
  gcd: playGreaterCommonDivisorGame,
  progression: playProgressionGame,
  prime: playPrimeGame,
};

console.log('\nAvailable games:');
console.log('1. even - Even number detector');
console.log('2. calculator - Arithmetic calculator');
console.log('3. gcd - Greatest common divisor');
console.log('4. progression - Arithmetic progression');
console.log('5. prime - Prime number detector\n');

const gameChoice = readlineSync.keyInSelect(
  Object.keys(games),
  'Choose a game: ',
);

if (gameChoice === -1) {
  console.log('Goodbye!');
} else {
  const selectedGame = Object.keys(games)[gameChoice];
  games[selectedGame]();
}
