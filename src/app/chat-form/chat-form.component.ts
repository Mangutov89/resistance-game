import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { RoomGeneratorService } from '../room-generator.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})


export class ChatFormComponent implements OnInit {
  message: string;
  roomId: string;

  constructor(
    private chat: ChatService,
    private roomService: RoomGeneratorService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.roomId = urlParameters['id'];
    });
  }

  send() {
    this.chat.sendMessage(this.message, this.roomId)
    this.message = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

}
