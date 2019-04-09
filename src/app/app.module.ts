import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { routing } from './app.routing';
import { GameRoomComponent } from './game-room/game-room.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RoomGeneratorComponent } from './room-generator/room-generator.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GameRoomComponent,
    AuthenticationComponent,
    RoomGeneratorComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
