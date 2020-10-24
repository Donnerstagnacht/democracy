import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-bar-bot-login',
  templateUrl: './bar-bot-login.component.html',
  styleUrls: ['./bar-bot-login.component.scss']
})
export class BarBotLoginComponent implements OnInit {
  @Input() logoutButton: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logoutUser();
  }

}
