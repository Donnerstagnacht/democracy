import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/authentication/auth.service';
import { UserCredentials } from 'src/app/authentication/login/userCredentials';
import { GeneralFormsService } from 'src/app/shared/services/general-forms.service';

@Component({
  selector: 'app-confirm-login',
  templateUrl: './confirm-login.component.html',
  styleUrls: ['./confirm-login.component.scss']
})
export class ConfirmLoginComponent implements OnInit {
  @Output() confirmLoginEvent = new EventEmitter<boolean>();
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private generalFormsService: GeneralFormsService
    ) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    const userCredentials: UserCredentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    const loggedIn: Promise<boolean> = this.authService.confirmLoginUser(userCredentials.email, userCredentials.password);
    loggedIn.then((loggedStatus) => {
      if (loggedStatus) {
        console.log('loggedIn');
        this.confirmLoginEvent.emit(true);
      } else {
        this.confirmLoginEvent.emit(false);
      }
    });
  }

  cancelConfirmationProcess(): void {
    this.confirmLoginEvent.emit(false);
  }

  errorHandling(control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(this.loginForm, control, error);
  }

}
