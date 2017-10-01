export default class Transport {
  constructor(parcel) {
    this.package = parcel;
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
