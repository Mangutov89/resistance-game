import { Component, OnInit } from '@angular/core';
import { RoomGeneratorService } from '../room-generator.service';
import { Router } from '@angular/router';
import { Game } from '../models/game.model';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [ RoomGeneratorService ]
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, private roomService: RoomGeneratorService) { }

  ngOnInit() {
  }

  generateRoom(chat){
    var newGame: Game = new Game(chat);
    var roomId = this.roomService.newGame(newGame);
    this.router.navigate(['rooms', roomId])
  }

}
