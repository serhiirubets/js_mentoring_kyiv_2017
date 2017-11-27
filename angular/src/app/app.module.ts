import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import appRoutes from './config/routes';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { ParticipantsService } from './services/participants.service';
import { BoardService } from "./services/board.service";

import reducers from './reducers';
import { ParticipantFormComponent } from './components/participant-form/participant-form.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ParticipantsComponent,
    ParticipantComponent,
    ParticipantFormComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      initialState: {
        participants: [
          {name: 'First Name', age: 37, bet: 500, id: 23},
          {name: 'Second Name', age: 27, bet: 400, id: 56},
          {name: 'Third Name', age: 57, bet: 200, id: 85},
          {name: 'Fourth Name', age: 33, bet: 100, id: 785}
        ]
      }
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ParticipantsService, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
