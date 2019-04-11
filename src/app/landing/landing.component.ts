import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})

export class LandingComponent implements OnInit {

  isLoggedIn;
  userName;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if(user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  ngOnInit() {
  }

  signOut() {
    this.authService.logout();
  }

}
