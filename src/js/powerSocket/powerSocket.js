export default class PowerSocket {
  constructor(adapter) {
    this.adapter = adapter;
  }

  plug(cb) {
    this.adapter.plug(cb);
  }
}
