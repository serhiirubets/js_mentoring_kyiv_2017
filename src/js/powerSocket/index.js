// Entry point
// First task: Power socket
// We have an apartment with old power socket. You should implement the ability to plug socket with different
// standards of shape and voltage (e.g. USA, China, etc.). So, your entity should perform some transformation to
// fit old power socket.

import PowerSocket from './powerSocket';
import ChinaAdapter from './chinaAdapter';
import UkAdapter from './ukAdapter';
import UsAdapter from './UsAdapter';

const country = 'UK';
const cb = () => console.log('cb');
let adapter;

switch (country) {
    case 'UK':
        adapter = new UkAdapter();
        break;

    case 'US':
        adapter = new UsAdapter();
        break;

    case 'China':
        adapter = new ChinaAdapter();
        break;
}

const powerSocket = new PowerSocket(adapter);
powerSocket.plug(cb);