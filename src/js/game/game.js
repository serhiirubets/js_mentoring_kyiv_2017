import Observer from './observer';

const COMPLETE_GAME = 'COMPLETE_GAME';

export default class Game {
  constructor(bank) {
    this.observer = new Observer();
    this.bank = bank;
    this.players = [];
  }

  applyBet(name, amount, cb) {
    this.bank += amount;
    this.players.push(name);
    this.observer.subscribe(COMPLETE_GAME, cb);
  }

  completeGame() {
    const winner = this.__getWinner();
    this.observer.dispatch(COMPLETE_GAME, winner, this.bank);
    this.bank = 0;
  }

  __getWinner() {
    const winnerIndex = this.__randomInteger(0, this.players.length);
    return this.players[winnerIndex];
  }

  __randomInteger(min, max) {
    const random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
  }
}
