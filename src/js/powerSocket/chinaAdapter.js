export default class ChinaAdapter {
    constructor() {
        this.adaptee = window;
    }

    log() {
        console.log('Call some logic for china plugin');
    }

    plug(cb) {
        this.log();
        cb();
    }
}