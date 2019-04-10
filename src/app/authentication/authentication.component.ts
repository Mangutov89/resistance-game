import { Component } from '@angular/core';
import { AuthenticationService } from "./../authentication.service";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent {

  user;
  userName;

  private isLoggedIn: Boolean;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe((user) => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login(username) {
    if(username.length > 0) {
      this.authService.login(username);
    }
  }

  logout() {
    this.authService.logout();
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    if(this.user !== null) {
      this.userName = this.user.displayName;
    }

  }

}
