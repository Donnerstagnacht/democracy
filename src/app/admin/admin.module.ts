import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDeleteEmailDialogComponent } from './components/admin-delete-email-dialog/admin-delete-email-dialog.component';
import { AdminDeleteMessageDialogComponent } from './components/admin-delete-message-dialog/admin-delete-message-dialog.component';
import { AdminEditSubscriberDialogComponent } from './components/admin-edit-subscriber-dialog/admin-edit-subscriber-dialog.component';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';
import { AdminNewsletterComponent } from './components/admin-newsletter/admin-newsletter.component';
import { AdminNewsletterDialogComponent } from './components/admin-newsletter-dialog/admin-newsletter-dialog.component';
import { AdminSendEmailDialogComponent } from './components/admin-send-email-dialog/admin-send-email-dialog.component';
import { AdminSubscribersComponent } from './components/admin-subscribers/admin-subscribers.component';
import { AdminUnsubscribeComponent } from './components/admin-unsubscribe/admin-unsubscribe.component';
import { AdminUnsubscribeDialogComponent } from './components/admin-unsubscribe-dialog/admin-unsubscribe-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDeleteEmailDialogComponent,
    AdminDeleteMessageDialogComponent,
    AdminEditSubscriberDialogComponent,
    AdminMessagesComponent,
    AdminNewsletterComponent,
    AdminNewsletterDialogComponent,
    AdminSendEmailDialogComponent,
    AdminSubscribersComponent,
    AdminUnsubscribeComponent,
    AdminUnsubscribeDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
