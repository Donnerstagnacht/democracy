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
import { AdminEmailReplyCurtainService } from '../admin-email-reply-curtain.service';
import { EmailReply } from '../admin-email-reply/emailReply';
import { Newsletter } from '../admin-newsletter/newsletter';
import { SubscriberService } from './subscriber.service';
import { MessagesService } from './messages.service';
import { EmailsService } from './emails.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  subscribers: Observable<EmailSubscriberID[]>;
  messagesWebpage: Observable<MessageWebpageID[]>;

  menuTabList: MenuTab[] = [
    {
      tabName: 'NEWSLETTER',
      tabLink: '#admin/newsletter'
    },
    {
      tabName: 'SUBSCRIBERS',
      tabLink: '#admin/subscribers'
    },
    {
      tabName: 'MESSAGES',
      tabLink: '#admin/messages'
    },
  ];

  elem: HTMLElement;
  instance: ScrollSpy;

  email: string;
  id: string;

  // https://froala.com/wysiwyg-editor/
  // implement it for editing emails to send to all of them?
  constructor(
    private authService: AuthService,
    private elementRef: ElementRef,
    private adminEmailReplyCurtainService: AdminEmailReplyCurtainService,
    private subscriberService: SubscriberService,
    private messageService: MessagesService,
    private emailsService: EmailsService
    ) {}

  ngOnInit(): void {
    this.elem = this.elementRef.nativeElement.querySelectorAll('.scrollspy3');
    this.instance = ScrollSpy.init(this.elem);

    this.subscribers = this.subscriberService.getSubscribers();
    this.messagesWebpage = this.messageService.getMessages();
  }

  createSubscriber(subscriber: EmailSubscriber) {
    this.subscriberService.createSubscriber(subscriber);
  }

  updateSubscriber(subscriber: EmailSubscriberID) {
    this.subscriberService.updateSubscriber(subscriber);
  }

  deleteSubscriber(subscriber: EmailSubscriberID) {
    this.subscriberService.deleteSubscriber(subscriber);
  }

  filterSubscriber(filterString: string) {
    this.subscribers = this.subscriberService.filterSubscriber(filterString);
  }

  openEmailReplyClickedOnSubscriber(subscriber: EmailSubscriberID): void {
    this.email = subscriber.email;
    this.id = subscriber.id;
    this.adminEmailReplyCurtainService.openEmailReply(subscriber.email, 'subscriber-email-id');
  }

  openEmailReplyClickedOnMessage(messageWebpageID: MessageWebpageID ): void {
    this.email = messageWebpageID.email;
    this.id = messageWebpageID.id;
    this.adminEmailReplyCurtainService.openEmailReply(this.email, this.id);
  }

  replyByEmail(emailData: EmailReply) {
    this.emailsService.replyOnMessageByEmail(emailData);
    this.adminEmailReplyCurtainService.closeEmailReply('subscriber-email-id');
  }

  deleteMessage(id: string): void {
    this.messageService.deleteMessage(id);
  }

  sendNewsletter(newsletter: Newsletter): void {
    this.emailsService.sendNewsletter(newsletter);
  }

  logout(): void {
    this.authService.logoutUser();
  }
}
