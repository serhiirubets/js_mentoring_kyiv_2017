import { Component, OnInit } from '@angular/core';
import { getRandomNumber } from '../../helpers';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  randomFieldsResult: Array<number>;

  constructor() { }

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
  }


  start() {
    this.generateRandomFieldsResult();
    this.showWinner();
  }
}
