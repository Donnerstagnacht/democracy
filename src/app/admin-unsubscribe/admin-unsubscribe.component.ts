import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { EmailSubscriber, EmailSubscriberID } from '../admin/emailSubscriber';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-unsubscribe',
  templateUrl: './admin-unsubscribe.component.html',
  styleUrls: ['./admin-unsubscribe.component.scss']
})
export class AdminUnsubscribeComponent implements OnInit {
  private subscriberDoc: AngularFirestoreDocument<EmailSubscriber>;
  // private subscribersCollection: AngularFirestoreCollection<EmailSubscriber>;
  id: string;

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); // 7yD7Lq0w1eA4u0KzSJQ2
    console.log(this.id);

  }

  unsubscribe(id: string): void { // subscriber: EmailSubscriberID
    console.log('unsubscribe', id);
   /* const emailSubscriber: EmailSubscriber = {email: email};
    this.subscribersCollection = this.firestore.collection<EmailSubscriber>('subscribers');
    this.subscribersCollection.add(emailSubscriber);*/

    this.subscriberDoc = this.firestore.doc<EmailSubscriber>('subscribers/' + id);
    this.subscriberDoc.delete();
    this.router.navigate(['']);
  }

}
