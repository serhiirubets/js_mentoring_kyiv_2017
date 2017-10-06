const getPrice = days => 15 * days;
const days = 1;
const rooms = 1;

const defaultOptions = {
  rooms,
  days,
  price: getPrice(days),
};

export default class Apartment {
  bookRooms(opt) {
    this.options = {
      ...defaultOptions,
      ...opt,
    };

    console.log(`Congratulations. You have booked ${opt.rooms} rooms`);
  }
}
