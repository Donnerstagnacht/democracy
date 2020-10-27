import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';


@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    SharedModule,
    PostModule
  ]
})
export class TimelineModule { }
