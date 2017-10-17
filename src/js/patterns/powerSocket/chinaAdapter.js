import ChinaFork from './chinaFork';

export default class ChinaAdapter {
  constructor() {
    this.fork = new ChinaFork();
  }

  plug() {
    return this.fork.plugThisSocketToChinaPowerSocket();
  }
}
