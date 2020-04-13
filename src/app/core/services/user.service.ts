import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { IDetailedUser } from '../models/detailed-user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private baseUrl: string = 'https://reqres.in/api/users';
  private pageOne: string = '?page=1';
  private pageTwo: string = '?page=2';

  constructor(private httpClient: HttpClient) { }

  /*
    function makes an API request for users and 
    returns an Observable of type any.
  */
  requestAllUsers = (): Observable<any[]> =>{
    const pageOneResults = this.httpClient.get<any>(`${this.baseUrl}${this.pageOne}`);
    const pageTwoResults = this.httpClient.get<any>(`${this.baseUrl}${this.pageTwo}`);

    return forkJoin([pageOneResults, pageTwoResults]);;
  }

  // Get user details;
  requestUserDetails = (id: number): Observable<IDetailedUser> => {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<any>(url, httpOptions);
  }

}
