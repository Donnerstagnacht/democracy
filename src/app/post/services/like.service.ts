import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Like } from 'src/app/shared/models/like';
import { DocumentReference } from '@firebase/firestore-types';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { AuthService } from 'src/app/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  userId$: Observable<string>;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
    ) { }

  checkAlreadyLiked(postId: string): Observable<boolean> {
    const likeSubject: Subject<boolean> = new Subject();
    this.userId$ = this.authService.getUserId();
    this.userId$.subscribe(uid => {
      const likeDoc: AngularFirestoreDocument<any> = this.firestore
        .collection('posts')
        .doc(postId)
        .collection('likes')
        .doc(uid);
      likeDoc.valueChanges().subscribe((document) => {
        if (document) {
          likeSubject.next(true);
        } else {
          likeSubject.next(false);
        }
      });
    });
    return likeSubject.asObservable();
  }

  createLike(postId: string): void {
    this.userId$.subscribe(uid => {
      const increment = firebase.firestore.FieldValue.increment(1);
      const batch = this.firestore.firestore.batch();
      batch.set(this.createLikeDocRef(postId, uid), {uid});
      batch.update(this.createPostDocRef(postId), {likesTotal: increment});
      batch.commit();
    });

  }

  deleteLike(postId: string): void {
    this.userId$.subscribe(uid => {
      const decrement = firebase.firestore.FieldValue.increment(-1);
      const batch = this.firestore.firestore.batch();
      batch.delete(this.createLikeDocRef(postId, uid));
      batch.update(this.createPostDocRef(postId), {likesTotal: decrement});
      batch.commit();
    });
  }

  private createPostDocRef(postId: string): DocumentReference<any> {
    const postDocRef: DocumentReference<any> = this.firestore
    .collection('posts')
    .doc(postId)
    .ref;
    return postDocRef;
  }

  private createLikeDocRef(postId: string, uid: string): DocumentReference<any> {
    const likeRef: DocumentReference<any> = this.firestore
    .collection('posts')
    .doc(postId)
    .collection('likes')
    .doc(uid)
    .ref;
    return likeRef;
  }
}
