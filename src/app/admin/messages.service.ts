import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MessageWebpageID, MessageWebpage } from './messageWebpage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messagesCollection: AngularFirestoreCollection<MessageWebpage>;
  private messagesWebpage: Observable<MessageWebpageID[]>;
  private messageWebpageDoc: AngularFirestoreDocument<MessageWebpage>;

  constructor(private firestore: AngularFirestore) { }

  getMessages(): Observable<MessageWebpageID[]> {
    this.messagesCollection = this.firestore.collection<MessageWebpage>('messagesWebpage');
    this.messagesWebpage = this.messagesCollection.snapshotChanges().pipe(
      map((actions) => actions.map( a => {
        const data = a.payload.doc.data() as MessageWebpage;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    return this.messagesWebpage;
  }

  createMessage(messageWebpage: MessageWebpage) {
    this.messagesCollection = this.firestore.collection<MessageWebpage>('messagesWebpage');
    this.messagesCollection.add(messageWebpage);
  }

  readMessage(id: string): AngularFirestoreDocument<MessageWebpage> {
    return this.firestore.doc<MessageWebpage>('messagesWebpage/' + id);
  }

  updateMessage(id: string, data: any): void {
    this.messageWebpageDoc = this.readMessage(id);
    this.messageWebpageDoc.update(data);
  }

  deleteMessage(id: string): void {
    this.messageWebpageDoc = this.readMessage(id);
    this.messageWebpageDoc.delete();
  }
}
