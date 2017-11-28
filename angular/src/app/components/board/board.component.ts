import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BoardService } from "../../services/board.service";
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {
  participantId: string;
  randomFieldsResult: Array<Array<number>>;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService
  ) {
    this.route.params.subscribe( params => this.participantId = params.id );
  }

  ngOnInit() {
    this.randomFieldsResult = this.boardService.getResultScores();
  };

  private generateFields() {
    const randomArray = this.generateRandomArrayWithUniqueNumbers(9, 0);

    const firstRow = randomArray.slice(0, 3);
    const secondRow = randomArray.slice(3, 6);
    const thirdRow = randomArray.slice(6);

    this.randomFieldsResult = [firstRow, secondRow, thirdRow];
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

  private showWinner() {
    console.log(Math.random() > 0.5);
  }

  start() {
    this.boardService.generateResultScores();
    this.showWinner();
  }
}
