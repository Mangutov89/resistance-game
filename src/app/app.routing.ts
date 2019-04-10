import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { SignInComponent } from './sign-in/sign-in.component';

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
  },
  {
    path: 'signIn',
    component: SignInComponent
  },
  {
    path: 'chat',
    component: ChatroomComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
