import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmailSubscriber } from './emailSubscriber';
import { MessageWebpage } from './messageWebpage';
import { MenuTab } from '../bar-side/menuTab';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  subscribers: Observable<EmailSubscriber[]>;
  messsagesWebpage: Observable<MessageWebpage[]>;

  menuTabList: MenuTab[] = [
    {
      tabName: 'Subscribers',
      tabLink: '/admin#subscribers'
    },
    {
      tabName: 'Messages',
      tabLink: '/admin#messages'
    },
  ];

  constructor(private firestore: AngularFirestore) {
    this.subscribers = this.firestore.collection<EmailSubscriber>('subscribers').valueChanges();
    this.messsagesWebpage = this.firestore.collection<MessageWebpage>('messagesWebpage').valueChanges();
   }

  ngOnInit(): void {

  }
}
