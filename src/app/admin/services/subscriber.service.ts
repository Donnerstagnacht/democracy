import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmailSubscriberID, EmailSubscriber } from '../models/emailSubscriber';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  private subscribersCollection: AngularFirestoreCollection<EmailSubscriber>;
  private subscribers: Observable<EmailSubscriberID[]>;
  private subscriberDoc: AngularFirestoreDocument<EmailSubscriber>;

  constructor(
    private firestore: AngularFirestore
  ) { }

  getSubscribers(): Observable<EmailSubscriberID[]> {
    this.subscribersCollection = this.firestore.collection<EmailSubscriber>('subscribers');
    this.subscribers = this.subscribersCollection.snapshotChanges().pipe(
      map((actions) => actions.map( a => {
        const data = a.payload.doc.data() as EmailSubscriber;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    return this.subscribers;
  }

  createSubscriber(subscriber: EmailSubscriber): void {
    this.subscribersCollection = this.firestore.collection<EmailSubscriber>('subscribers');
    this.subscribersCollection.add(subscriber);
  }

  readSubscriber(subscriber: EmailSubscriberID): AngularFirestoreDocument<EmailSubscriber> {
    return this.firestore.doc<EmailSubscriber>('subscribers/' + subscriber.id);
  }

  updateSubscriber(subscriber: EmailSubscriberID): void {
    this.subscriberDoc = this.readSubscriber(subscriber);
    this.subscriberDoc.update({email: subscriber.email});
  }

  deleteSubscriber(subscriber: EmailSubscriberID): void {
    this.subscriberDoc = this.readSubscriber(subscriber);
    this.subscriberDoc.delete();
  }

  filterSubscriber(filterString: string): Observable<EmailSubscriberID[]> {
    this.subscribersCollection = this.firestore.collection('subscribers', ref => ref.where('email', '>=', filterString));
    this.subscribers = this.subscribersCollection.snapshotChanges().pipe(
      map((actions) => actions.map( a => {
        const data = a.payload.doc.data() as EmailSubscriber;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    return this.subscribers;
  }

  unsubscribe(email: string): void {
    this.subscribersCollection = this.firestore.collection('subscribers', ref => ref.where('email', '==', email).limit(1));

    // tslint:disable-next-line:max-line-length
    const documentChangeActionEmailSubscriber: Observable<DocumentChangeAction<EmailSubscriber>[]> = this.subscribersCollection.snapshotChanges();

    const unsubscribeEmailSubscriberID$: Observable<EmailSubscriberID[]> = documentChangeActionEmailSubscriber.pipe(
      map((documentChangeActionArray) => documentChangeActionArray.map( documentChangeAction => {
        const emailUnsubscribeData: EmailSubscriber = documentChangeAction.payload.doc.data();
        const ida: string = documentChangeAction.payload.doc.id;
        const emailSubscriberID: EmailSubscriberID = {id: ida, email: emailUnsubscribeData.email};
        return emailSubscriberID;
      }))
    );

    unsubscribeEmailSubscriberID$
    .pipe(take(1))
    .subscribe(subscribers => {
      if (subscribers.length >= 1) {
        this.deleteSubscriber(subscribers[0]);
      }
    });

  }

}
