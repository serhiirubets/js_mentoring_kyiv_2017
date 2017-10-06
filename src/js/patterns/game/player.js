const dafaultAmount = 1000;

export default class Player {
  constructor(name) {
    this.name = name;
    this.amount = dafaultAmount;
    this.complete = this.complete.bind(this);
  }

  makeBet(game, amount) {
    this.amount -= amount;
    game.applyBet(this.name, amount, this.complete);
  }

  complete(winner, amount) {
    if (this.name === winner) {
      this.amount += amount;
      console.log(`${winner} won`);
    } else {
      console.log(`${this.name} loose`);
    }
  }
}
