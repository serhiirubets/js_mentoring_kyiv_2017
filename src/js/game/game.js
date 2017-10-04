import Observer from './observer';

const observer = new Observer();

export default class Game {
  constructor(name) {
    this.name = name;
  }

  applyBet(cb) {
    observer.subscribe(this.name, cb);
  }

  completeGame() {
    const winner = this.__getWinner();
    observer.dispatch(this.name, winner);
  }

  __getWinner() {
    const listeners = observer.getListeners()[this.name];
    const winner = this.__randomInteger(0, listeners.length);

    return winner;
  }

  __randomInteger(min, max) {
    const random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
  }
}
