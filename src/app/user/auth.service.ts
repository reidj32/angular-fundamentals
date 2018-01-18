import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class AuthService {
  currentUser: User;

  constructor() { }

  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Jim',
      lastName: 'Reid'
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

}
