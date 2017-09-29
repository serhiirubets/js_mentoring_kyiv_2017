const adaptee = 'adaptee';

export default class ChinaAdapter {
  constructor() {
    this.adaptee = adaptee;
  }

  log() {
    console.log(`Call some logic for china ${this.adaptee} plugin`);
  }

  plug(cb) {
    this.log();
    cb();
  }
}
