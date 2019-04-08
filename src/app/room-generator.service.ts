import { Injectable } from '@angular/core';
import { Game } from './models/game.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RoomGeneratorService {
  rooms: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.rooms = database.list('rooms')
  }

  newGame(newRoom: Game){
    this.rooms.push(newRoom);
  }

}
