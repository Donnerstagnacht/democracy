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
import { ButtonShareComponent } from './button-share/button-share.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { FaqComponent } from './faq/faq.component';
import { FaqControllerComponent } from './faq-controller/faq-controller.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TeamMemberControllerComponent } from './team-member-controller/team-member-controller.component';
import { CardTextComponent } from './card-text/card-text.component';
import { CardControllerComponent } from './card-controller/card-controller.component';
import { HighlightComponent } from './highlight/highlight.component';
import { BarShareComponent } from './bar-share/bar-share.component';
import { ArgumentComponent } from './argument/argument.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactComponent } from './contact/contact.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { BarBotComponent } from './bar-bot/bar-bot.component';
import { BotBarCurtainComponent } from './bot-bar-curtain/bot-bar-curtain.component';
import { BarBotCurtainComponent } from './bar-bot-curtain/bar-bot-curtain.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BarSideLoesungenComponent } from './bar-side-loesungen/bar-side-loesungen.component';
import { BarSideLoesungenTabletComponent } from './bar-side-loesungen-tablet/bar-side-loesungen-tablet.component';
import { BarSideLoesungenMobileComponent } from './bar-side-loesungen-mobile/bar-side-loesungen-mobile.component';
import { AdminComponent } from './admin/admin.component';
import { WebpageComponent } from './webpage/webpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BarSideComponent,
    ButtonShareComponent,
    ImpressumComponent,
    FaqComponent,
    FaqControllerComponent,
    TeamMemberComponent,
    TeamMemberControllerComponent,
    CardTextComponent,
    CardControllerComponent,
    HighlightComponent,
    BarShareComponent,
    ArgumentComponent,
    NewsletterComponent,
    ContactComponent,
    ImageCarouselComponent,
    BarBotComponent,
    BotBarCurtainComponent,
    BarBotCurtainComponent,
    LandingPageComponent,
    BarSideLoesungenComponent,
    BarSideLoesungenTabletComponent,
    BarSideLoesungenMobileComponent,
    AdminComponent,
    WebpageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
