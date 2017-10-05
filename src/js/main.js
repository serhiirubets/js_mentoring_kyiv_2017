import './powerSocket';
import './game';
import SkiTerminal from './ski-terminal';
import './transport';

const skiTerminal = new SkiTerminal('Max');
skiTerminal.bookSki({ age: 28 });
skiTerminal.bookTickets({ count: 3 });
skiTerminal.bookRooms({ rooms: 3 });

