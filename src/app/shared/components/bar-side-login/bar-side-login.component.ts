import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-bar-side-login',
  templateUrl: './bar-side-login.component.html',
  styleUrls: ['./bar-side-login.component.scss']
})
export class BarSideLoginComponent implements OnInit {
  @Input() logoutButton: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logoutUser();
  }

}
