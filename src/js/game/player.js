const dafaultAmount = 1000;

export default class Player {
  constructor(name) {
    this.name = name;
    this.amount = dafaultAmount;
    this.complete = this.complete.bind(this);
  }

  makeBet(game, amount) {
    this.amount -= amount;
    game.applyBet(this.complete);
  }

  complete(amount) {
    if (amount) {
      this.amount += amount;
      console.log(`${this.name} won`);
    } else {
      console.log(`${this.name} loose`);
    }
  }
}
