import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { GameRoomComponent } from './game-room/game-room.component'
import { AuthenticationComponent } from './authentication/authentication.component'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'rooms/:id',
    component: GameRoomComponent
  },
  {
    path: 'welcome',
    component: LandingComponent,
    children: [
      { path: "signIn", component: AuthenticationComponent},
    ]
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
