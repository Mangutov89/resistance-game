import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication.service'

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ChatMessage } from '../models/chat-message.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<ChatMessage[]>;
  roomId: string;

  constructor(
    private chat: ChatService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.roomId = urlParameters['id'];
    });
    this.feed = this.chat.getMessages(this.roomId);
  }

  ngOnChanges() {
    this.feed = this.chat.getMessages(this.roomId);
  }
}
