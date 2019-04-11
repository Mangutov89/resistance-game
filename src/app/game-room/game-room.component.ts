import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { Room } from '../models/room.model';
import { RoomGeneratorService } from '../room-generator.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss'],
  providers: [ RoomGeneratorService, AuthenticationService ]
})

export class GameRoomComponent implements OnInit {
  roomId: string;
  roomToDisplay;
  isLoggedIn: Boolean;

  constructor(private route: ActivatedRoute, private location: Location, private roomService: RoomGeneratorService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.roomId = urlParameters['id'];
    });
    this.roomToDisplay = this.roomService.getRoomById(this.roomId);

    this.authService.user.subscribe(user => {
      if(user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }
}
