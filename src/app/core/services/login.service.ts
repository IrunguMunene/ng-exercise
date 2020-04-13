import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   // if hasToken returns true then user is logged in.
  private hasToken = (): boolean => !!localStorage.getItem('token');

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken())

  constructor() { }

  // Login the user
  login = (): void => {
    localStorage.setItem('token', 'JWT');
    this.loggedIn.next(true);
  }

  // Logout the user
  logout = (): void => {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  // Check if user is logged in
  isLoggedIn = (): Observable<boolean> => {
    return this.loggedIn.asObservable();
  }

}
