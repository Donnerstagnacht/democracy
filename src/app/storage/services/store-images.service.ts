import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable, Subject } from 'rxjs';
import { first, take } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StoreImagesService {
  task: AngularFireUploadTask;
  uploadPercentage: Observable<number>;

  constructor(
    private angularFireStorage: AngularFireStorage
  ) { }

  // return Observable<string> -> the url
  startBlobUpload(event: Blob, folderPath: string): Observable<string> {
    const file = event;

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type');
    }
    const path = `${folderPath}/${new Date().getTime()}`;
    this.task = this.angularFireStorage.upload(path, file);

    this.uploadPercentage = this.task.percentageChanges();

    const subjectUrl: Subject<string> = new Subject();

    this.task.then(() => {
      this.angularFireStorage.ref(path).getDownloadURL()
      .pipe(take(1))
      .subscribe((url) => {
        subjectUrl.next(url);
      });
    });

    return subjectUrl.asObservable();
  }
}
