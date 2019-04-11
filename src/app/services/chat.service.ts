import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service';

import * as firebase from 'firebase/app';


import { ChatMessage } from '../models/chat-message.model';


@Injectable()
export class ChatService {
  user: any;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
   }

  sendMessage(msg: string, roomId: string) {
    const timestamp = this.getTimeStamp();
    this.chatMessages = this.getMessages(roomId);
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: this.afAuth.auth.currentUser.displayName,
      roomId: roomId
     });
  }


  getMessages(roomId:string): FirebaseListObservable<ChatMessage[]> {
    // query to create our message feed binding
    return this.db.list('messages', {
      query: {
        equalTo: roomId,
        limitToLast: 25,
        orderByChild: "roomId"
      }
    })
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
}
