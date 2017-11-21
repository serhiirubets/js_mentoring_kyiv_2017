import { Component, OnInit } from '@angular/core';
import { getRandomNumber } from '../../helpers';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  fieldsCount: Array<number>;
  selected: Array<number>;
  randomFieldsResult: Array<number>;

  constructor() { }

  private generateFields() {
    this.fieldsCount = [];

    for (let i = 1; i <= 9; i++) {
      this.fieldsCount.push(i);
    }
  }

  private generateRandomFieldsResult() {
    this.randomFieldsResult = [];

    for (let i = 1; i <= 3; i++) {
      this.randomFieldsResult.push((getRandomNumber(1, 9)));
    }
  }

  private showWinner() {
    alert(Math.random() > 0.5);
  }

  ngOnInit() {
    this.generateFields();
    this.selected = [];
  }

  select(i) {
    if (this.selected.length < 3) {
      this.selected.push(i);
    }
  }

  start() {
    this.generateRandomFieldsResult();
    this.showWinner();
  }
}
