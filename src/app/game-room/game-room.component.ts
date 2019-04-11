import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { Room } from '../models/room.model'
import { RoomGeneratorService } from '../room-generator.service'

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss'],
  providers: [ RoomGeneratorService ]
})
export class GameRoomComponent implements OnInit {
  roomId: string;
  roomToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private roomService: RoomGeneratorService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.roomId = urlParameters['id'];
    });
    this.roomToDisplay = this.roomService.getRoomById(this.roomId);
  }

  addMessage() {
    console.log(this.roomToDisplay.messages)
    this.roomToDisplay.messages.push({
      message: "here sure is a message",
      timeSent: "Time",
      userName: "Frank Le-Berry",
      roomId: this.roomId
     })
  }
}
