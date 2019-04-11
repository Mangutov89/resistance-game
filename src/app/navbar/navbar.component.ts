import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ AuthenticationService ]
})
export class NavbarComponent implements OnInit {
  isLoggedIn;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if(user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
  })
}

  signOut() {
    this.authService.logout();
  }

}
