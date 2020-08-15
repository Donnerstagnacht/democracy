import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmailSubscriber, EmailSubscriberID } from './emailSubscriber';
import { MessageWebpage, MessageWebpageID } from './messageWebpage';
import { MenuTab } from '../bar-side/menuTab';
import { AuthService } from '../auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';

import { ScrollSpy } from 'materialize-css';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // Getting Data
  private subscribersCollection: AngularFirestoreCollection<EmailSubscriber>;
  subscribers: Observable<EmailSubscriberID[]>;

  // Deleting and editing documents
  private subscriberDoc: AngularFirestoreDocument<EmailSubscriber>;

  private messagesCollection: AngularFirestoreCollection<MessageWebpage>;
  messagesWebpage: Observable<MessageWebpageID[]>;
  private messageDoc: AngularFirestoreDocument<MessageWebpage>;

  menuTabList: MenuTab[] = [
    {
      tabName: 'SUBSCRIBERS',
      tabLink: '/admin#subscribers'
    },
    {
      tabName: 'MESSAGES',
      tabLink: '/admin#messages'
    },
  ];

  elem: HTMLElement;
  instance: ScrollSpy;

  // https://froala.com/wysiwyg-editor/
  // implement it for editing emails to send to all of them?
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
    private elementRef: ElementRef,
    private fun: AngularFireFunctions
    ) {
      this.messagesCollection = firestore.collection<MessageWebpage>('messagesWebpage');
      this.messagesWebpage = this.messagesCollection.snapshotChanges().pipe(
        map((actions) => actions.map( a => {
          console.log('in');
          const data = a.payload.doc.data() as MessageWebpage;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );

      this.subscribersCollection = firestore.collection<EmailSubscriber>('subscribers');
      this.getSubscribers();
  }

  getSubscribers(): void {
    this.subscribers = this.subscribersCollection.snapshotChanges().pipe(
      map((actions) => actions.map( a => {
        console.log('in subscribers');
        const data = a.payload.doc.data() as EmailSubscriber;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  ngOnInit(): void {
    // M.AutoInit();
    this.elem = this.elementRef.nativeElement.querySelectorAll('.scrollspy3');
    this.instance = ScrollSpy.init(this.elem);
  }

  editSubscriber(subscriber: EmailSubscriberID) {
    this.subscriberDoc = this.firestore.doc<EmailSubscriber>('subscribers/' + subscriber.id);
    const subscriberNoId: EmailSubscriber = {email: subscriber.email};
    this.subscriberDoc.update(subscriberNoId);
  }

  deleteSubscriber(subscriber: EmailSubscriberID) {
    this.subscriberDoc = this.firestore.doc<EmailSubscriber>('subscribers/' + subscriber.id);
    this.subscriberDoc.delete();
  }

  addSubscriber(subscriber: EmailSubscriber) {
    this.subscribersCollection.add(subscriber);
  }

  filterSubscriber(filterString: string) {
    this.subscribersCollection = this.firestore.collection('subscribers', ref => ref.where('email', '>=', filterString));
    this.getSubscribers();
  }

  logout(): void {
    this.authService.logoutUser();
  }

  sendIndividualEmail(): void {
    console.log('cklicked');
    // const callableFunction1 = this.fun.httpsCallable('genericEmail');
    // callableFunction1({text: 'Sending emails with Sendgrid from Democracy', subject: 'Email from Democracy'}).subscribe();

    const callableSendIndividualEmail = this.fun.httpsCallable('sendIndividualEmail');
    callableSendIndividualEmail({
      subject: 'Email from Democracy',
      email: 'tobias.hassebrock@gmail.com',
      name: 'Tobi',
      text: 'Sending emails with Sendgrid from Democracy'}).subscribe();

    console.log('function ended');
  }

  sendAllEmails(): void {
    console.log('clicked');
    const callableSendAllEmails = this.fun.httpsCallable('sendAllEmails');
    callableSendAllEmails({
      subject: 'Erster Newsletter',
      email: 'tobias.hassebrock@gmail.com',
      text: 'Erster Newslettertext'
    }).subscribe();
  }
}
