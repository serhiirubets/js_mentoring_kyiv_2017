import Car from './car';
import Plane from './plane';
import Ship from './ship';

const transports = {
  car: type => new Car(type),
  plane: type => new Plane(type),
  ship: type => new Ship(type),
};

export default class Transport {
  create(type) {
    return transports[type](type);
  }
}
