import { Injectable } from '@angular/core';
import { Newsletter } from '../models/newsletter';
import { AngularFireFunctions } from '@angular/fire/functions';
import { EmailReply } from '../models/emailReply';
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
      title1: newsletter.title1,
      text1: newsletter.text1,
      title2: newsletter.title2,
      text2: newsletter.text2,
      title3: newsletter.title3,
      text3: newsletter.text3
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
