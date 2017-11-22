import { Component, OnInit } from '@angular/core';
import {ParticipantsService} from "../../services/participants.service";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  participants: Array<object>;

  constructor(
    private participantsService: ParticipantsService,
  ) {}

  ngOnInit() {
    this.participants = this.participantsService.getParticipants();
  }
}
