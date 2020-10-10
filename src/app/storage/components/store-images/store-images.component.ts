import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-store-images',
  templateUrl: './store-images.component.html',
  styleUrls: ['./store-images.component.scss']
})
export class StoreImagesComponent implements OnInit {
  task: AngularFireUploadTask;

  uploadPercentage: Observable<number>;
  snapshot: Observable<firebase.storage.UploadTaskSnapshot>;
  downloadURL: any;

  isHoovering: boolean;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(
    private angularFireStorage: AngularFireStorage,
    private angularFirestore: AngularFirestore
    ) { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean) {
    this.isHoovering = event;
  }

  startUpload(event: FileList): void {
    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type');
    }

    const path = `test/${new Date().getTime()}_${file.name}`;
    // this.angularFirestore.collection('test').add({path});
    this.task = this.angularFireStorage.upload(path, file);

    this.uploadPercentage = this.task.percentageChanges();

    console.log('test1');
    this.task.snapshotChanges().subscribe(
      (snap) => {
        console.log('test2');
        if (snap.bytesTransferred === snap.totalBytes) {
        console.log('test3');
        this.angularFirestore.collection('test').add({path});
        console.log('test4');
        return snap;
       }
      }
    );
  }

  uploadIsActive(snapshot: UploadTaskSnapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

}
