import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from 'src/app/authentication/auth.service';
import * as firebase from 'firebase/app';
import { DocumentReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FollowProfileService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  isAlreadyFollowing(loggedInUserId: string, visitedUserId: string): Observable<any> {
    const followerRef: AngularFirestoreDocument<any> = this.firestore
    .collection('users')
    .doc(loggedInUserId)
    .collection('following')
    .doc(visitedUserId);

    return followerRef.valueChanges();
  }

  follow(loggedInUserId: string, visitedUserId: string): void {
    const batch = this.firestore.firestore.batch();
    const increment = firebase.firestore.FieldValue.increment(1);
    batch.set(this.createFollowingDoc(loggedInUserId, visitedUserId), {following: visitedUserId});
    batch.update(this.incrementFollowing(loggedInUserId), { followingTotal: increment });
    batch.set(this.createFollowerDoc(loggedInUserId, visitedUserId), {follower: loggedInUserId});
    batch.update(this.incrementFollower(visitedUserId), { followerTotal: increment });
    batch.commit();
  }

  unFollow(loggedInUserId: string, visitedUserId: string): void {
    console.log(loggedInUserId);
    const batch = this.firestore.firestore.batch();
    const decrement = firebase.firestore.FieldValue.increment(-1);
    batch.delete(this.createFollowingDoc(loggedInUserId, visitedUserId));
    batch.update(this.incrementFollowing(loggedInUserId), { followingTotal: decrement });
    batch.delete(this.createFollowerDoc(loggedInUserId, visitedUserId));
    batch.update(this.incrementFollower(visitedUserId), { followerTotal: decrement });
    batch.commit();
  }

  createFollowingDoc(loggedInUserId: string, visitedUserId: string): DocumentReference<any> {
    const userDocRef: DocumentReference<any> = this.firestore
      .collection('users')
      .doc(loggedInUserId)
      .collection('following')
      .doc(visitedUserId)
      .ref;
    return userDocRef;
  }

  incrementFollowing(loggedInUserId: string): DocumentReference<any> {
    const followingCounterRef: DocumentReference<any> = this.firestore
      .collection('users')
      .doc(loggedInUserId)
      .ref;
    return followingCounterRef;
  }

  createFollowerDoc(loggedInUserId: string, visitedUserId: string): DocumentReference<any> {
    const userDocRef: DocumentReference<any> = this.firestore
      .collection('users')
      .doc(visitedUserId)
      .collection('follower')
      .doc(loggedInUserId)
      .ref;
    return userDocRef;
  }

  incrementFollower(visitedUserId: string): DocumentReference<any> {
    const followingCounterRef: DocumentReference<any> = this.firestore
    .collection('users')
    .doc(visitedUserId)
    .ref;
    return followingCounterRef;
  }

  deleteFollowing(): void {}

  deleteFollower(): void {}

}
