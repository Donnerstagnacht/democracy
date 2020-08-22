import { Injectable } from '@angular/core';
import { EmailSubscriberID } from './emailSubscriber';
import { Newsletter } from '../admin-newsletter/newsletter';
import { AngularFireFunctions } from '@angular/fire/functions';
import { EmailReply } from '../admin-email-reply/emailReply';
import { MessagesService } from './messages.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { MessageWebpageID, MessageWebpage } from './messageWebpage';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  private messageWebpageDoc: AngularFirestoreDocument<MessageWebpage>;

  constructor(
    private angularFireFunctions: AngularFireFunctions,
    private firestore: AngularFirestore,
    private messageService: MessagesService) { }

  sendNewsletter(newsletter: Newsletter): void {
    const callableSendAllEmails = this.angularFireFunctions.httpsCallable('sendAllEmails');
    callableSendAllEmails({
      subject: newsletter.subject,
      text: newsletter.text
    }).subscribe();
  }

  replyOnMessageByEmail(emailData: EmailReply) {
    const callableSendIndividualEmail = this.angularFireFunctions.httpsCallable('sendIndividualEmail');
    callableSendIndividualEmail({
      subject: emailData.subject,
      email: emailData.email,
      text: emailData.text,
      id: emailData.id
    }).subscribe(() => {
       this.messageService.updateMessage(emailData.id, {responded: true});
    });
  }
}
