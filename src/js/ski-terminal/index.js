// Let's imagine you come to a ski resort. You should go in some place and rent a skiing.
// Then, you should go to another place and buy a ticket to a ski lift. And of course, you
// should rent an apartment for your rest Implement an ability which allows people can make
// all of this things in one place, only entering their own personal data (height, age, gender)
// Some terminal box to buy or rent those things

import Apartment from './apartment';
import SkiBox from './ski-box';
import TicketBox from './ticket-box';

export default class SkiTerminal {
  constructor(user) {
    this.user = user;
    this.apartment = new Apartment();
    this.skiBox = new SkiBox();
    this.ticketBox = new TicketBox();
  }

  bookRooms(opt) {
    this.apartment.bookRooms(opt);
  }

  bookSki(opt) {
    this.skiBox.bookSki(opt);
  }

  bookTickets(opt) {
    this.ticketBox.bookTickets(opt);
  }
}
