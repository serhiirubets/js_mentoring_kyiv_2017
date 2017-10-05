// Entry point
// First task: Power socket
// We have an apartment with old power socket.You should implement the ability to
// plug socket with different standards of shape and voltage (e.g. USA, China, etc.).
// So, your entity should perform some transformation to fit old power socket.

// Adapter pattern

import PowerSocket from './powerSocket';

const ukAdapter = new PowerSocket('uk');
ukAdapter.plug();
