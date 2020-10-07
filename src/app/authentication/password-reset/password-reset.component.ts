import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  resetPasswordByEmail(): void {
    this.authService.resetPasswordByEmail('tobias.hassebrock@gmail.com');
  }

}
