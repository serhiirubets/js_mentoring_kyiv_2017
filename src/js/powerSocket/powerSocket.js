import SocketAdapter from './adapter';

export default class PowerSocket {
  constructor(type) {
    this.adapter = new SocketAdapter(type).socket;
  }

  plug() {
    this.adapter.plug();
  }
}
