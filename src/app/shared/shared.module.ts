import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './components/faq/faq.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { VideoCarouselComponent } from './components/video-carousel/video-carousel.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { ButtonShareComponent } from './components/button-share/button-share.component';
import { MatMenuModule } from '@angular/material/menu';
import { ClipboardModule } from 'ngx-clipboard';
import { CardTextComponent } from './components/card-text/card-text.component';
import { ArgumentComponent } from './components/argument/argument.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BarBotComponent } from './components/bar-bot/bar-bot.component';
import { BarBotCurtainComponent } from './components/bar-bot-curtain/bar-bot-curtain.component';
import { BarShareComponent } from './components/bar-share/bar-share.component';
import { BarSideComponent } from './components/bar-side/bar-side.component';
import { BarSideSubmenuComponent } from './components/bar-side-submenu/bar-side-submenu.component';
import { BarSideSubmenuMobileComponent } from './components/bar-side-submenu-mobile/bar-side-submenu-mobile.component';
import { BarSideSubmenuTabletComponent } from './components/bar-side-submenu-tablet/bar-side-submenu-tablet.component';
import { TranslocoModule } from '@ngneat/transloco';
import { SwitchLanguageComponent } from './components/switch-language/switch-language.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FaqComponent,
    TeamMemberComponent,
    VideoCarouselComponent,
    ImageCarouselComponent,
    HighlightComponent,
    ButtonShareComponent,
    CardTextComponent,
    ArgumentComponent,

    BarBotComponent,
    BarBotCurtainComponent,
    BarShareComponent,
    BarSideComponent,
    BarSideSubmenuComponent,
    BarSideSubmenuMobileComponent,
    BarSideSubmenuTabletComponent,
    SwitchLanguageComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    ClipboardModule,

    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule,
    MatButtonModule,

    TranslocoModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MatMenuModule,
    FaqComponent,
    TeamMemberComponent,
    VideoCarouselComponent,
    ImageCarouselComponent,
    HighlightComponent,
    ButtonShareComponent,
    CardTextComponent,
    ArgumentComponent,

    BarBotComponent,
    BarBotCurtainComponent,
    BarShareComponent,
    BarSideComponent,
    BarSideSubmenuComponent,
    BarSideSubmenuMobileComponent,
    BarSideSubmenuTabletComponent,
    SwitchLanguageComponent,

    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule,
    MatButtonModule,

    TranslocoModule,
  ]
})
export class SharedModule { }
