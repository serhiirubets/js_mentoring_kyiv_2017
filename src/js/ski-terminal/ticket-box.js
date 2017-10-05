
const getPrice = count => 15 * count;
const count = 1;

const defaultOptions = {
  count,
  price: getPrice(2),
};

export default class TicketBox {
  bookTickets(opt) {
    this.options = {
      ...defaultOptions,
      ...opt,
    };

    console.log(`Congratulations. You have booked ${this.options.count} tickets`);
  }
}
