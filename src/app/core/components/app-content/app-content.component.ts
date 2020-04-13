import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
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

  logout() {
    this.loginService.logout();
    this.isLoggedIn = this.loginService.isLoggedIn();
  }
}
