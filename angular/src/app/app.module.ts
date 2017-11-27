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

import { LimitToPipe } from './pipes/limit-to';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ParticipantsComponent,
    ParticipantComponent,
    ParticipantFormComponent,
    BoardComponent,
    LimitToPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      initialState: {
        participants: JSON.parse(localStorage.getItem('participants')) || [],
      }
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ParticipantsService, BoardService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
