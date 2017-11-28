import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {generateResult} from '../actions/board';

interface AppState {
  participants: Array<object>,
  game: Array<number>,
  board: Array<Array<number>>
}

@Injectable()
export class BoardService {
  resultScores: Array<Array<number>>;

  constructor(private store: Store<AppState>) {}

  generateResultScores() {
    const randomArray = this.generateRandomArrayWithUniqueNumbers(9, 0);

    const firstRow = randomArray.slice(0, 3);
    const secondRow = randomArray.slice(3, 6);
    const thirdRow = randomArray.slice(6);

    this.store.dispatch(generateResult([firstRow, secondRow, thirdRow]));
  }

  getResultScores(): Array<Array<number>> {
    this.store.select('board').subscribe((scores: Array<Array<number>>) => {
      this.resultScores = scores;
    });

    return this.resultScores;
  }

  private generateRandomArrayWithUniqueNumbers(length: number, maxNumber: number): Array<number> {
    const arr = [];

    while(arr.length < length) {
      let randomnumber = Math.floor(Math.random() * maxNumber) + 1;
      if(arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
    }

    return arr;
  }
}
