import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { generateBoardData, generateWinnerScores } from '../actions/board';

interface AppState {
  participants: Array<object>,
  game: Array<number>,
  board: {
    winnerScores: Array<number>,
    fields: Array<Array<number>>
  }
}

interface Board {
  fields: Array<Array<number>>,
  winnerScores: Array<number>,
}

@Injectable()
export class BoardService {
  boardFields: Array<Array<number>>;
  winnerScores: Array<number>;

  constructor(private store: Store<AppState>) {}

  generateWinnerBoard() {
    const randomArray = this.generateRandomArrayWithUniqueNumbers(9, 9);

    const firstRow = randomArray.slice(0, 3);
    const secondRow = randomArray.slice(3, 6);
    const thirdRow = randomArray.slice(6);

    this.store.dispatch(generateBoardData([firstRow, secondRow, thirdRow]));
  }

  getBoardFields(): Array<Array<number>> {
    this.store.select('board').subscribe((board: Board) => {
      this.boardFields = board.fields;
    });

    return this.boardFields;
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

  generateWinnerScores() {
    const results = this.generateRandomArrayWithUniqueNumbers(3, 9);

    this.store.dispatch(generateWinnerScores(results));
  }

  getWinnerScores() {
    this.generateWinnerScores();

    this.store.select('board').subscribe((board: Board) => {
      this.winnerScores = board.winnerScores;
    });

    return this.winnerScores;
  }
}
