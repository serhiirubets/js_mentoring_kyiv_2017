export default class Observer {
  constructor() {
    this.observers = {};
  }

  subscribe(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    if (!this.observers[type]) {
      this.observers[type] = [];
    }

    this.observers[type].push(listener);

    // Unsubscribe function
    return () => {
      this.observers[type] = this.observers[type].filter(cb => cb !== listener);
    };
  }

  dispatch(type, winner) {
    const observers = this.observers[type];

    if (!observers) {
      throw new Error(`Observer with ${type} does not exist`);
    }

    observers.forEach((callback, index) => {
      const amount = index === winner
        ? 500
        : 0;

      callback(amount);
    });
  }

  getListeners() {
    return this.observers;
  }
}
