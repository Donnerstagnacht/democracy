import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebpageRoutingModule } from './webpage-routing.module';
import { WebpageComponent } from './components/webpage/webpage.component';
import { SharedModule } from '../shared/shared.module';
import { TeamMemberControllerComponent } from './components/team-member-controller/team-member-controller.component';
import { CardControllerComponent } from './components/card-controller/card-controller.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { FaqControllerComponent } from './components/faq-controller/faq-controller.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { NewsletterDialogComponent } from './components/newsletter-dialog/newsletter-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardControllerComponent,
    ContactComponent,
    ContactDialogComponent,
    FaqControllerComponent,
    ImpressumComponent,
    LandingPageComponent,
    NewsletterComponent,
    NewsletterDialogComponent,
    TeamMemberControllerComponent,
    WebpageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    WebpageRoutingModule
  ]
})
export class WebpageModule { }
