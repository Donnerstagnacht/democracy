import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-bot-login',
  templateUrl: './bar-bot-login.component.html',
  styleUrls: ['./bar-bot-login.component.scss']
})
export class BarBotLoginComponent implements OnInit {
  @Input() logoutButton: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
