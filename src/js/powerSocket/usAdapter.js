const adaptee = 'adaptee';

export default class USAdapter {
  constructor() {
    this.adaptee = adaptee;
  }

  getModernStandard() {
    console.log(`get some logic for US  ${this.adaptee} plugin`);
  }

  plug(cb) {
    this.getModernStandard();
    cb();
  }
}
