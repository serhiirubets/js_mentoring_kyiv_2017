import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ParticipantsService } from "../../services/participants.service";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
  constructor(
    private participantsService: ParticipantsService,
  ) {}

  @Input() winners: Array<string>;
  @Input() participants:  Array<object>;

  ngOnInit() {}

  remove(id) {
    this.participantsService.remove(id, (data) => {
      this.participants = data;
    });
  }
}
