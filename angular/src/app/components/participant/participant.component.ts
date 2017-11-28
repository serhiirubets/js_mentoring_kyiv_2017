import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from "../../services/participants.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ChangeDetectionStrategy } from '@angular/core';

interface Participant {
  id: string,
}

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantComponent implements OnInit {
  participantId: string;
  participant: object;

  constructor(
    private participantsService: ParticipantsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe( params => this.participantId = params.id );
  }

  ngOnInit() {
    this.participant = this.participantsService.getParticipants().find((item: Participant)=> item.id == this.participantId);
  }

  edit(id: string) {
    this.router.navigateByUrl(`/edit/${id}`);
  }

  placeBet(value) {
    console.log(value);
  }
}
