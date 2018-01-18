import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserRoutingModule],
  declarations: [ProfileComponent, LoginComponent],
  providers: [AuthService],
})
export class UserModule {}
