export default class UkraineAdapter {
    constructor() {
        this.adaptee = window;
    }

    write() {
        console.log('Call some logic for ukraine plugin');
    }

    plug(cb) {
        this.write();
        cb();
    }
}