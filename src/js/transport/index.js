// There is some logistics company. The company can transport parcels by cars and ships.
// In the future, the company wants to grow and add some new type of transport. You
// should consider this possibility. When a person creates a package, he can specify
// the type of transport. As result in some place of your implementation should decide which
// type of transport should create and use for some parcel.

// Composite pattern
// Maybe factory ?

import Car from './car';
import Plane from './plane';
import Ship from './ship';

const transports = {
  car: type => new Car(type),
  plane: type => new Plane(type),
  ship: type => new Ship(type),
};

function getTransport(transport) {
  return transports[transport](transport);
}

const car = getTransport('car');
console.log(car);
