import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService {
  participants: Array<object>;

  constructor() {
    this.participants = [
      {name: 'First Name', age: 37, balance: 500, id: 23},
      {name: 'Second Name', age: 27, balance: 400, id: 56},
      {name: 'Third Name', age: 57, balance: 200, id: 85},
      {name: 'Fourth Name', age: 33, balance: 100, id: 785}
    ];
  }

  getParticipants(): Array<object> {
    return this.participants;
  }

  add(participant) {
    this.participants.push(participant);
  }
}
