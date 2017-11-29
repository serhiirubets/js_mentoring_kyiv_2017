import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { BoardService } from '../../services/board.service';
import {ParticipantsService} from "../../services/participants.service";

interface Participant {
  id: string,
  bet: string
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  winners: Array<string>;
  winnerScores: Array<number>;
  boardFields: Array<Array<number>>;
  participants: Array<Object>;

  constructor(
    private boardService: BoardService,
    private participantsService: ParticipantsService
  ) {}

  ngOnInit() {
    this.winners = [];
    this.participants = this.participantsService.getParticipants();
    this.boardFields = this.boardService.getBoardFields();
  };

  showWinner() {
    const winnerScores = this.winnerScores.join('');
    this.participants = this.participantsService.getParticipants();

    this.participants.forEach((participant: Participant) => {
      if (participant.bet !== winnerScores) {
        return;
      }

      this.winners.push(participant.id);
    });
  }

  start = () => {
    this.winnerScores = this.boardService.getWinnerScores();
    this.boardService.generateWinnerBoard();
    this.boardFields = this.boardService.getBoardFields();

    this.showWinner();
  }
}
