import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredentials } from './userCredentials';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginMode: boolean;

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.loginMode = true;
  }

  onSubmit(): void {
    const userCredentials: UserCredentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    if (this.loginMode) {
      this.authService.loginUser(userCredentials.email, userCredentials.password);
    } else {
      this.authService.createUser(userCredentials.email, userCredentials.password);
    }
  }

  changeLoginMode(): void {
    this.loginMode = !this.loginMode;
  }
}
