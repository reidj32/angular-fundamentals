import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Toastr, ToastrToken } from '../../common';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService, private router: Router, @Inject(ToastrToken) private toastr: Toastr) {
    let firstName = '';
    let lastName = '';
    if (this.authService.currentUser) {
      firstName = this.authService.currentUser.firstName;
      lastName = this.authService.currentUser.lastName;
    }

    this.firstName = new FormControl(firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  ngOnInit() {}

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
        this.toastr.success('Profile Saved!');
      });
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['user/login']);
    });
  }

  validateFirstName() {
    if (!this.firstName) {
      return false;
    }
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    if (!this.lastName) {
      return false;
    }
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
