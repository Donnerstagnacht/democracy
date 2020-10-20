import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    SharedModule
  ]
})
export class TimelineModule { }
