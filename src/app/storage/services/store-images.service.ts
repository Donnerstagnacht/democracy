import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StoreImagesService {
  task: AngularFireUploadTask;
  uploadPercentage: Observable<number>;

  constructor(
    private angularFireStorage: AngularFireStorage,
    private angularFirestore: AngularFirestore,
    private authService: AuthService
  ) { }

  startBlobUpload(event: Blob): void {
    const file = event;

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type');
    }

    const path = `test/${new Date().getTime()}`;
    this.task = this.angularFireStorage.upload(path, file);

    this.uploadPercentage = this.task.percentageChanges();

    this.task.then(() => {
      this.angularFireStorage.ref(path).getDownloadURL().subscribe((url) => {
        console.log('promiseURL', url);
        this.authService.updateProfileImage(url);
      });
    });
/*
    console.log('test1');
    this.task.snapshotChanges().subscribe(
      (snap) => {
        console.log('test2');
        if (snap.bytesTransferred === snap.totalBytes) {
        console.log('test3');
        this.angularFirestore.collection('test').add({path});
        // this.authService.updateProfileImage(path);

        const ref = this.angularFireStorage.storage.ref(path);
        const downloadUrl = ref.getDownloadURL();
        console.log('url', downloadUrl);
        downloadUrl.then((url) => {
          console.log('innerUrl', url);
          this.authService.updateProfileImage(url);

        }
        );


        console.log('test4');
        return snap;
       }
      }
    );*/
  }
}
