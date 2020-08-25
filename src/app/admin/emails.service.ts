import { Injectable } from '@angular/core';
import { Newsletter } from '../admin-newsletter/newsletter';
import { AngularFireFunctions } from '@angular/fire/functions';
import { EmailReply } from './emailReply';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  constructor(
    private angularFireFunctions: AngularFireFunctions,
    private messageService: MessagesService) { }

  sendNewsletter(newsletter: Newsletter): void {
    const callableSendAllEmails = this.angularFireFunctions.httpsCallable('sendAllEmails');
    callableSendAllEmails({
      subject: newsletter.subject,
      text: newsletter.text
    }).subscribe();
  }

  replyByEmail(emailData: EmailReply, onMessage: boolean) {
    const callableSendIndividualEmail = this.angularFireFunctions.httpsCallable('sendIndividualEmail');
    callableSendIndividualEmail({
      subject: emailData.subject,
      email: emailData.email,
      text: emailData.text,
      id: emailData.id
    }).subscribe(() => {
      if (onMessage) {
        this.messageService.updateMessage(emailData.id, {responded: true});
      }
    });
  }
}
