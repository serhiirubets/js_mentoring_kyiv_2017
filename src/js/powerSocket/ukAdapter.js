const adaptee = 'adaptee';

export default class UkraineAdapter {
  constructor() {
    this.adaptee = adaptee;
  }

  write() {
    console.log(`Call some logic for ukraine  ${this.adaptee} plugin`);
  }

  plug(cb) {
    this.write();
    cb();
  }
}
