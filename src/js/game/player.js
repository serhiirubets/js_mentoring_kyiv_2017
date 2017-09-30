import Observer from './observer';

const observer = new Observer();

export default class Player {
  constructor(name) {
    this.name = name;
  }

  subscribe(type, cb) {
    observer.subscribe(type, cb);
  }

  dispatch(type) {
    observer.dispatch(type);
  }
}
