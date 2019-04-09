import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(username) {
    this.afAuth.auth.signInAnonymously().then(() => {
      this.afAuth.auth.currentUser.updateProfile({displayName: username, photoURL: null});
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  setNickname() {
    var user = firebase.auth().currentUser;

    console.log(user)
  //   user.updateProfile({}).then(function() {
  //     // Update successful.
  //   }).catch(function(error) {
  //   // An error happened.
  // });
}

}

// firebase.auth().signInAnonymously().catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
