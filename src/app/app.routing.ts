import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { GameRoomComponent } from './game-room/game-room.component'

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
  path: 'rooms/:id',
  component: GameRoomComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
