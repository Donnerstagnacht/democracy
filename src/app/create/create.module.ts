import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageModule } from '../storage/storage.module';


@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StorageModule
  ]
})
export class CreateModule { }
