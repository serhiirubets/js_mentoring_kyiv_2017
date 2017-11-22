import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Router} from '@angular/router';

import { add } from '../actions/participants';

interface AppState {
  participants: Array<object>,
  game: Array<number>
}

@Injectable()
export class ParticipantsService {
  participants: Array<object>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  getParticipants(): Array<object> {
    this.store.select('participants').subscribe((items) => {
      this.participants = items;
    });

    return this.participants;
  }

  add(participant: Object) {
    this.store.dispatch(add(participant));
    this.router.navigateByUrl('/');
  }
}
