import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageWebpage } from '../admin/messageWebpage';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.scss']
})
export class AdminMessagesComponent implements OnInit {
  @Input() messsagesWebpage: Observable<MessageWebpage[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
