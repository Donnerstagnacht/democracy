import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreImagesComponent } from './components/store-images/store-images.component';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [StoreImagesComponent],
  imports: [
    CommonModule,
    AngularFireStorageModule
  ],
  exports: [
    StoreImagesComponent
  ]
})
export class StorageModule { }
