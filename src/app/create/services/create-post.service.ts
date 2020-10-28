import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreCollectionGroup,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CreatePost } from 'src/app/shared/models/createPost';
import { DocumentReference } from '@firebase/firestore-types';
import * as firebase from 'firebase/app';
import { AuthService } from 'src/app/authentication/auth.service';
import { endWith, finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/profile/models/profile';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private authService: AuthService
    ) { }

  createPost(postData: CreatePost ): void {
    this.authService.getUserId().subscribe(uid => {
      // Create Post
      const userDocRef: DocumentReference<any> = this.firestore
        .collection('users')
        .doc(uid)
        .ref;
      const  newPostId = this.firestore.createId();
      const postCollectionRef: DocumentReference<any> = this.firestore
        .collection('posts')
        .doc(newPostId)
        .ref;

      const increment = firebase.firestore.FieldValue.increment(1);
      const batch = this.firestore.firestore.batch();
      batch.set(postCollectionRef, postData);
      batch.update(userDocRef, {postsTotal: increment});

      // Add Posts to all following timelines
      const collectionGroup$: AngularFirestoreCollectionGroup<any> = this.firestore
        .collectionGroup('following', ref => ref.where('following', '==', uid ));

      const loadedFollowerIds: Observable<string[]> = collectionGroup$.snapshotChanges().pipe(
        map((actions) => actions.map( a => {
          const parentsIds: string = a.payload.doc.ref.parent.parent.id;
          return parentsIds;
        })),
      );

      loadedFollowerIds.subscribe(followerIds => {
        followerIds.forEach(followerDocId => {
          const newParentTimelineDoc: DocumentReference<any> = this.firestore
          .collection('users')
          .doc(followerDocId)
          .collection('timeline')
          .doc(newPostId)
          .ref;

          batch.set(newParentTimelineDoc, {});
        });
        batch.commit().then(() => {
          this.router.navigate(['profile']);
        });
      });
    });
  }

  deletePost(): void {}
}
