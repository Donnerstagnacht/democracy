import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { NoAdminPermissionComponent } from './no-admin-permission/no-admin-permission.component';



@NgModule({
  declarations: [
    LoginComponent,
    PasswordResetComponent,
    NoAdminPermissionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class AuthenticationModule { }
