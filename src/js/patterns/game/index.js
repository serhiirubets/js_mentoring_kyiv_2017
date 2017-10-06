// We have bookmaker’s companies with a lot of kinds of sport and games. There are players who can
// make a bet for the special game and follow the result. When this game is finished, each player
// who was made a bet to this game will receive notification about his gain or loss

// Observer pattern

import Player from './player';
import Game from './game';

const poker = new Game();

const vasya = new Player('vasya');
const dima = new Player('dima');
const vanya = new Player('vanya');

vasya.makeBet(poker, 5);
dima.makeBet(poker, 10);
vanya.makeBet(poker, 15);

poker.completeGame();
