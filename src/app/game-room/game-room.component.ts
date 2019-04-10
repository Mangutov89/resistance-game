import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { Game } from '../models/game.model'
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
    console.log(this.roomToDisplay.chat)
    console.log(this.roomToDisplay)
  }
}
