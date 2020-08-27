import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarSideComponent } from './bar-side/bar-side.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { FaqControllerComponent } from './faq-controller/faq-controller.component';
import { TeamMemberControllerComponent } from './team-member-controller/team-member-controller.component';
import { CardControllerComponent } from './card-controller/card-controller.component';
import { BarShareComponent } from './bar-share/bar-share.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactComponent } from './contact/contact.component';
import { BarBotComponent } from './bar-bot/bar-bot.component';
import { BarBotCurtainComponent } from './bar-bot-curtain/bar-bot-curtain.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BarSideSubmenuComponent } from './bar-side-submenu/bar-side-submenu.component';
import { BarSideSubmenuTabletComponent } from './bar-side-submenu-tablet/bar-side-submenu-tablet.component';
import { BarSideSubmenuMobileComponent } from './bar-side-submenu-mobile/bar-side-submenu-mobile.component';
import { AdminComponent } from './admin/admin.component';
import { WebpageComponent } from './webpage/webpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminSubscribersComponent } from './admin-subscribers/admin-subscribers.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { AdminNewsletterComponent } from './admin-newsletter/admin-newsletter.component';
import { AdminUnsubscribeComponent } from './admin-unsubscribe/admin-unsubscribe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminUnsubscribeDialogComponent } from './admin-unsubscribe-dialog/admin-unsubscribe-dialog.component';
import { SharedModule } from './shared/shared.module';
import { NewsletterDialogComponent } from './newsletter-dialog/newsletter-dialog.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { AdminDeleteEmailDialogComponent } from './admin-delete-email-dialog/admin-delete-email-dialog.component';
import { AdminEditSubscriberDialogComponent } from './admin-edit-subscriber-dialog/admin-edit-subscriber-dialog.component';
import { AdminDeleteMessageDialogComponent } from './admin-delete-message-dialog/admin-delete-message-dialog.component';
import { AdminSendEmailDialogComponent } from './admin-send-email-dialog/admin-send-email-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    BarSideComponent,
    ImpressumComponent,
    FaqControllerComponent,
    TeamMemberControllerComponent,
    CardControllerComponent,
    BarShareComponent,
    NewsletterComponent,
    ContactComponent,
    BarBotComponent,
    BarBotCurtainComponent,
    LandingPageComponent,
    BarSideSubmenuComponent,
    BarSideSubmenuTabletComponent,
    BarSideSubmenuMobileComponent,
    AdminComponent,
    WebpageComponent,
    RegisterComponent,
    LoginComponent,
    AdminSubscribersComponent,
    AdminMessagesComponent,
    AdminNewsletterComponent,
    AdminUnsubscribeComponent,
    AdminUnsubscribeDialogComponent,
    NewsletterDialogComponent,
    ContactDialogComponent,
    AdminDeleteEmailDialogComponent,
    AdminEditSubscriberDialogComponent,
    AdminDeleteMessageDialogComponent,
    AdminSendEmailDialogComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    SharedModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
