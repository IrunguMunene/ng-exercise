import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IDetailedUser } from '../core/models/detailed-user';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {

  user: IDetailedUser;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser = (): void =>{
    // Get the country name from the URL params
    const id: string  = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.requestUserDetails(parseInt(id)).subscribe(e => {
      this.user = e['data'];
    });
  }

  goBack = (): void => this.location.back();

}
