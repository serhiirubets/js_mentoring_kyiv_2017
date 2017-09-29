export default class USAdapter {
    constructor() {
        this.adaptee = window;
    }

    getModernStandard() {
        console.log('get some logic for US plugin');
    }

    plug(cb) {
        this.getModernStandard();
        cb();
    }
}