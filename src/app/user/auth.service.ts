import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class AuthService {
  currentUser: User;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    const payload = { username: userName.toLocaleLowerCase(), password: password };

    return this.http
      .post('http://localhost:8808/api/login', payload, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
      .do((res: any) => {
        if (res && res.user) {
          this.currentUser = <User>res.user;
        }
      })
      .catch(() => {
        return Observable.of(false);
      });
  }

  logout() {
    this.currentUser = undefined;

    return this.http.post(
      'http://localhost:8808/api/logout',
      {},
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }
    );
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get<User>('http://localhost:8808/api/currentIdentity').subscribe(res => {
      if (!!res) {
        this.currentUser = res;
      }
    });
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    return this.http.put(`http://localhost:8808/api/users/${this.currentUser.id}`, this.currentUser, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
