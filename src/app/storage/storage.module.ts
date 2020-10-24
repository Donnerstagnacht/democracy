import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ImageCropperComponent
  ],
  imports: [
    CommonModule,
    AngularFireStorageModule,
    ImageCropperModule,
    SharedModule
  ],
  exports: [
    ImageCropperComponent
  ]
})
export class StorageModule { }
