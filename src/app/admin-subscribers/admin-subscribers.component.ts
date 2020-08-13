import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailSubscriber } from '../admin/emailSubscriber';

@Component({
  selector: 'app-admin-subscribers',
  templateUrl: './admin-subscribers.component.html',
  styleUrls: ['./admin-subscribers.component.scss']
})
export class AdminSubscribersComponent implements OnInit {
  @Input() subscribers: Observable<EmailSubscriber[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
