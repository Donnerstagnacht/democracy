import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSkeletonRoutingModule } from './app-skeleton-routing.module';
import { AppBotBarComponent } from './components/app-bot-bar/app-bot-bar.component';
import { AppSideBarComponent } from './components/app-side-bar/app-side-bar.component';
import { AppTopBarComponent } from './components/app-top-bar/app-top-bar.component';
import { AppSkeletonComponent } from './components/app-skeleton/app-skeleton.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileModule } from '../profile/profile.module';


@NgModule({
  declarations: [
    AppBotBarComponent,
    AppSideBarComponent,
    AppTopBarComponent,
    AppSkeletonComponent
  ],
  imports: [
    CommonModule,
    AppSkeletonRoutingModule,
    SharedModule,
    ProfileModule
  ]
})
export class AppSkeletonModule { }
