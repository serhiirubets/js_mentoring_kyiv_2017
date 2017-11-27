import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ParticipantsService } from "../../services/participants.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


interface Participant {
  id: string,
  name: string,
  age: number,
  bet: Array<number>
}

interface Form {
  name: string,
  age: number,
  bet: Array<number>
}

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent implements OnInit {
  participantId: string;
  parentParticipantId: string;
  participant: Participant;
  heroForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private participantsService: ParticipantsService,
    private fb: FormBuilder
  ) {
    this.route.parent.params.subscribe(params => this.parentParticipantId = params.id);
    this.route.params.subscribe(params => this.participantId = params.id);
  }

  private createForm(data: Form) {
    this.heroForm = this.fb.group({
      name: [data.name, Validators.required],
      age: [data.age, Validators.required],
      bet: [data.bet, Validators.required]
    });
  }

  ngOnInit() {
    this.participant = this.participantId
      ? this.participantsService.getParticipant(this.participantId)
      : {id: '', name: '', age: null, bet: []};

    this.createForm(this.participant);
  }

  save(e) {
    let participant: Participant = {id: String(Date.now()), name: null, age: null, bet: null};
    e.preventDefault();

    participant.id = this.parentParticipantId || this.participantId
      ? this.participantId
      : String(Date.now());

    participant.name = this.heroForm.value.name;
    participant.age = this.heroForm.value.age;
    participant.bet = this.heroForm.value.bet;

    this.participantsService.add(participant);
  }
}
