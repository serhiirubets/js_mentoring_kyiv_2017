import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  constructor() { }

  ngOnInit() {};
}
