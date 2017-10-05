import ChinaSocket from './chinaSocket';
import UkSocket from './ukSocket';
import UsSocket from './usSocket';

const adapters = {
  uk: () => new UkSocket(),
  us: () => new UsSocket(),
  china: () => new ChinaSocket(),
};

export default class SocketAdapter {
  constructor(type) {
    this.socket = adapters[type]();
  }
}

