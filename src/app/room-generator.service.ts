import { Injectable } from '@angular/core';
import { Room } from './models/room.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RoomGeneratorService {
  rooms: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.rooms = database.list('rooms')
  }

  newGame(newRoom: Room){
    var roomId = this.rooms.push(newRoom).key;
    return roomId;
  }

  getRoomById(roomId){
    return this.database.object('rooms/' + roomId)
  }

}
