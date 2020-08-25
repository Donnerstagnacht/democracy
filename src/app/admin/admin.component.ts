import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailSubscriber, EmailSubscriberID } from './emailSubscriber';
import { MessageWebpageID } from './messageWebpage';
import { MenuTab } from '../bar-side/menuTab';
import { AuthService } from '../auth.service';

import { ScrollSpy } from 'materialize-css';
import { Newsletter } from '../admin-newsletter/newsletter';
import { SubscriberService } from './subscriber.service';
import { MessagesService } from './messages.service';
import { EmailsService } from './emails.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AdminSendEmailDialogComponent } from '../admin-send-email-dialog/admin-send-email-dialog.component';
import { EmailReply } from './emailReply';

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

  constructor(
    private authService: AuthService,
    private elementRef: ElementRef,
    private subscriberService: SubscriberService,
    private messageService: MessagesService,
    private emailsService: EmailsService,
    private matDialog: MatDialog
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

  deleteMessage(id: string): void {
    this.messageService.deleteMessage(id);
  }

  replyByEmail(messageWebpageID: MessageWebpageID, onMessage: boolean): void {
    const sendEmailData: EmailReply = {
      id: messageWebpageID.id,
      email: messageWebpageID.email,
      subject: '',
      text: ''
    };
    const dialogRef: MatDialogRef<AdminSendEmailDialogComponent> = this.matDialog.open(AdminSendEmailDialogComponent, {
      panelClass: ['animate__animated', 'animate__slideInLeft'],
      height: '100vh',
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: sendEmailData,
    });
    dialogRef.afterClosed().subscribe((sendEmail: EmailReply) => {
      if (sendEmail) {
        this.emailsService.replyByEmail(sendEmail, onMessage);
      }
    });
  }

  sendNewsletter(newsletter: Newsletter): void {
    this.emailsService.sendNewsletter(newsletter);
  }

  logout(): void {
    this.authService.logoutUser();
  }
}
