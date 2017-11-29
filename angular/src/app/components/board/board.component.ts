import { Component, OnInit, Input } from '@angular/core';
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
  participants: Array<object>;
  winners: Array<string>;

  @Input() start;
  @Input() winnerScores: Array<number>;
  @Input() boardFields: Array<number>;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
  ) {
    this.route.params.subscribe( params => this.participantId = params.id );
  }

  ngOnInit() {
    this.winnerScores = [];
    this.winners = [];
  };

  startGame() {
    this.start();
  }
}

