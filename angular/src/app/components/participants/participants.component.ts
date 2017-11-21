import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {ParticipantsService} from "../../services/participants.service";

interface AppState {

}

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  participants: Array<Object>;

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit() {
    this.participants = this.participantsService.getParticipants();
  }
}
