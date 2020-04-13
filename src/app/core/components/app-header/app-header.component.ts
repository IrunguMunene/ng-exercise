import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };

  isLoggedIn: Observable<boolean>;
  
  constructor(private loginService: LoginService) {
    this.isLoggedIn = this.loginService.isLoggedIn();
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login();
    this.isLoggedIn = this.loginService.isLoggedIn();
  }

  signup() {
    this.loginService.login();
    this.isLoggedIn = this.loginService.isLoggedIn();
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn = this.loginService.isLoggedIn();
  }
}
