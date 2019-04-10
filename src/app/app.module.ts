import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, FirebaseListObservable } from 'angularfire2/database';


import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { GoogleComponent } from './google/google.component';
import { RoomGeneratorComponent } from './room-generator/room-generator.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { GameRoomComponent } from './game-room/game-room.component';

import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

import { ChatService } from './services/chat.service'
import { GoogleService } from './google.service'
import { AuthenticationService } from './authentication.service'


import { AuthOptionsComponent } from './auth-options/auth-options.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInAnonComponent } from './sign-in-anon/sign-in-anon.component';
import { PlayComponent } from './play/play.component'




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
    GoogleComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    UserListComponent,
    UserItemComponent,
    AuthenticationComponent,
    RoomGeneratorComponent,
    SignInComponent,
    AuthOptionsComponent,
    SignUpComponent,
    SignInAnonComponent,
    PlayComponent
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
  providers: [GoogleService, AuthenticationService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
