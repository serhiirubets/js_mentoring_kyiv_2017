export default class Transport {
  constructor(type) {
    this.type = type;
    this.MAX_WEIGHT = 10000;
  }
  send() {
    if (this.__getMaxWeight()) {
      // send
    }
  }

  __getMaxWeight() {
    return this.package.weight < this.MAX_WEIGHT;
  }
}
