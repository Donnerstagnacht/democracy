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

  // return Observable<string> -> the url
  startBlobUpload(event: Blob, folderPath: string): void {
    const file = event;

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type');
    }
    const path = `${folderPath}/${new Date().getTime()}`;
    this.task = this.angularFireStorage.upload(path, file);

    this.uploadPercentage = this.task.percentageChanges();

    this.task.then(() => {
      this.angularFireStorage.ref(path).getDownloadURL().subscribe((url) => {
        console.log('promiseURL', url);
        this.authService.updateProfileImage(url);
        // this.createPost.updatePostImage(url);
      });
    });
  }
}
