import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loginAnon(username) {
    return this.afAuth.auth.signInAnonymously().then(() => {
      this.afAuth.auth.currentUser.updateProfile({displayName: username, photoURL: null});
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  
  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
