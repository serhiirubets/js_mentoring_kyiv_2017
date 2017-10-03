// We have bookmaker’s companies with a lot of kinds of sport and games. There are players who can
// make a bet for the special game and follow the result. When this game is finished, each player
// who was made a bet to this game will receive notification about his gain or loss

// Observer pattern

import Player from './player';

const vasya = new Player();
const dima = new Player();

vasya.subscribe('poker', () => console.log('callback was called'));
vasya.subscribe('tennis', () => console.log('callback was called'));
dima.subscribe('football', () => console.log('callback was called'));

vasya.dispatch('poker');
vasya.dispatch('poker');
vasya.dispatch('tennis');

dima.dispatch('football');
