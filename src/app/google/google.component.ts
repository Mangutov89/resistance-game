import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./../authentication.service";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss'],
  providers: [AuthenticationService]
})

export class GoogleComponent implements OnInit {
  isLoggedIn;
  userName;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if(user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
