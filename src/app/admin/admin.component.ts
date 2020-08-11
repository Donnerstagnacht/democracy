import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmailSubscriber } from './emailSubscriber';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  subscribers: Observable<EmailSubscriber[]>;

  constructor(private firestore: AngularFirestore) {
    this.subscribers = this.firestore.collection<EmailSubscriber>('subscribers').valueChanges();
   }

  ngOnInit(): void {

  }
}
