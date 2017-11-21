import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ParticipantsService } from "../../services/participants.service";

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent implements OnInit {
  participantId: string;
  participant: object;

  constructor(
    private route: ActivatedRoute,
    private participantsService: ParticipantsService
  ) {
    this.route.params.subscribe(params => this.participantId = params.id );
  }

  ngOnInit() {
    this.participant = {};
  }

  save(e) {
    let participant;
    e.preventDefault();

    if (this.participantId) {
      participant = this.participantsService.getParticipants().find(participant => participant.id === this.participantId);
    } else {
      participant = {name: 'name'};
    }

    this.participantsService.add(participant);
    console.log(this.participantsService.getParticipants());
  }
}
