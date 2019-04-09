import { Component } from '@angular/core';
import { AuthenticationService } from "./../authentication.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent {

  user;

  private isLoggedIn: Boolean;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe((user) => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  login() {
    this.authService.login();
    console.log(`logged in ${user} login status : ${this.isLoggedIn}`)
  }

  logout() {
    this.authService.logout();
  }

}
