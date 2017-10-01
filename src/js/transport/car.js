import Transport from './transport';

export default class Car extends Transport {
  constructor(parcel) {
    super(parcel);
  }

  send() {
    super.send();
    console.log('send by plane');
  }
}
