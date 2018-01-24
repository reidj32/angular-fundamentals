import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mouseoverLogin: boolean;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(form): void {
    this.authService.loginUser(form.username, form.password).subscribe(res => {
      if (!res) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(['events']);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
