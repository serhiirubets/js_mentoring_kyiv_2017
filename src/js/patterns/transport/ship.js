import Transport from './transport';

export default class Ship extends Transport {
  constructor(parcel) {
    super(parcel);
  }

  send() {
    super.send();
    console.log('Send by ship');
  }
}
