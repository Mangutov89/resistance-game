import { Component, OnInit } from '@angular/core';
import { GoogleService }  from "./../google.service";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss'],
  providers: [GoogleService]
})

export class GoogleComponent implements OnInit {

  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public googleService: GoogleService) {
    this.googleService.user.subscribe(user => {
      if(user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login() {
    this.googleService.login();
  }

  logout() {
    this.googleService.logout();
  }

  ngOnInit() {
  }

}
