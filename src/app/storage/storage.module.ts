import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreImagesComponent } from './components/store-images/store-images.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DropzoneDirective } from './services/dropzone.directive';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StoreImagesComponent,
    DropzoneDirective,
    ImageCropperComponent
  ],
  imports: [
    CommonModule,
    AngularFireStorageModule,
    ImageCropperModule,
    SharedModule
  ],
  exports: [
    StoreImagesComponent,
    ImageCropperComponent
  ]
})
export class StorageModule { }
