import { Component, OnInit } from '@angular/core';
import { RoomGeneratorService } from '../room-generator.service';
import { Router } from '@angular/router';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-room-generator',
  templateUrl: './room-generator.component.html',
  styleUrls: ['./room-generator.component.scss'],
  providers: [ RoomGeneratorService ]
})

export class RoomGeneratorComponent implements OnInit {

  constructor(private router: Router, private roomService: RoomGeneratorService) { }

  ngOnInit() {
  }

  generateRoom(){
    var newRoom: Room = new Room();
    var roomId = this.roomService.newGame(newRoom);
    this.router.navigate(['rooms', roomId])
  }

}
