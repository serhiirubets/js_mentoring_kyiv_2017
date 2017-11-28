import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from "../../services/participants.service";
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantsComponent implements OnInit {
  participants: Array<object>;

  constructor(
    private participantsService: ParticipantsService,
  ) {}

  ngOnInit() {
    this.participants = this.participantsService.getParticipants();
  }

  remove(id) {
    this.participantsService.remove(id, (data) => {
      this.participants = data;
    });
  }
}
