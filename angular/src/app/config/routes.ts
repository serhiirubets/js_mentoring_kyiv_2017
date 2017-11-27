import { Routes } from '@angular/router';
import { GameComponent } from '../components/game/game.component';
import { ParticipantComponent } from '../components/participant/participant.component';
import {ParticipantFormComponent} from "../components/participant-form/participant-form.component";
import { LoginComponent } from "../components/login/login.component";

import { AuthGuard } from "../services/auth-guard.service";

const appRoutes: Routes = [
  {
    path: 'participant/:id',
    component: ParticipantComponent,
    children: [
      {
        path: 'edit',
        component: ParticipantFormComponent
      }
    ]
  },
  {
    path: 'add',
    component: ParticipantFormComponent,
  },
  {
    path: 'edit/:id',
    component: ParticipantFormComponent,
  },
  { path: '',
    component: GameComponent,
    pathMatch: 'full'
  },
  { path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export default appRoutes;
