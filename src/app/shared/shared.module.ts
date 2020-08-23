import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ButtonShareComponent } from './button-share/button-share.component';
import { MatMenuModule } from '@angular/material/menu';
import { ClipboardModule } from 'ngx-clipboard';
import { CardTextComponent } from './card-text/card-text.component';
import { ArgumentComponent } from './argument/argument.component';

@NgModule({
  declarations: [
    FaqComponent,
    TeamMemberComponent,
    VideoCarouselComponent,
    ImageCarouselComponent,
    HighlightComponent,
    ButtonShareComponent,
    CardTextComponent,
    ArgumentComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    ClipboardModule
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
    ArgumentComponent
  ]
})
export class SharedModule { }
