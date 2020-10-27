import { Injectable } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment';
import { DocumentReference } from '@firebase/firestore-types';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private firestore: AngularFirestore) { }

  readComments(postId: string): Observable<Comment[]> {
    const postRef: AngularFirestoreCollection<Comment> = this.firestore
      .collection('posts')
      .doc(postId)
      .collection('comments');

    const comments$: Observable<Comment[]> = postRef.valueChanges();
    return comments$;
  }

  createComment(comment: Comment, postId: string) {
    /*const followerRef: AngularFirestoreCollection<Comment> = this.firestore
    .collection('posts')
    .doc(this.post.id)
    .collection('comments');*/

    const followerRef: DocumentReference<any> = this.firestore
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .doc(this.firestore.createId())
      .ref;

    const postDocRef: DocumentReference<any> = this.firestore
      .collection('posts')
      .doc(postId)
      .ref;

    const increment = firebase.firestore.FieldValue.increment(1);
    const batch = this.firestore.firestore.batch();
    batch.set(followerRef, comment);
    batch.update(postDocRef, {commentsTotal: increment});
    batch.commit();
    // followerRef.add(comment);
  }

  deleteComment(): void {}
}
