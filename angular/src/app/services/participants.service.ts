import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { add } from '../actions/participants';

interface AppState {
  participants: Array<object>,
  game: Array<number>,
  board: Array<Array<number>>
}

interface Participant {
  id: string,
  name: string,
  age: number,
  bet: Array<number>
}

interface Predicate {
  id: string
}

@Injectable()
export class ParticipantsService {
  participants: Array<Participant>;
  participant: Object;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  private saveToLocalStorage(items) {
    localStorage.setItem('participants', JSON.stringify(items));
  }

  restore() {
    return JSON.parse(localStorage.getItem('participants'));
  }

  getParticipants(): Array<Participant> {
    this.store.select('participants').subscribe((items: Array<Participant>) => {
      this.participants = items;
    });

    return this.participants;
  }

  getParticipant(id: string): Participant {
    if (!this.participants) {
      this.getParticipants();
    }

    return this.participants.find((participant: Predicate) => participant.id == id)
  }

  add(participant: Object) {
    this.store.dispatch(add(participant));
    this.store.select('participants').subscribe(this.saveToLocalStorage);
    this.router.navigateByUrl('/');
  }
}
