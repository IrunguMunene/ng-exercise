import { Component, OnInit } from '@angular/core';


import { IDetailedUser } from '../core/models/detailed-user';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {

  users: IDetailedUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.requestAllUsers().subscribe(resp => {
      this.users = resp.reduce((acc, val) => acc.data.concat(val.data));
    });
  }

}
