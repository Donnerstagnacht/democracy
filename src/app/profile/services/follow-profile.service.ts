import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from 'src/app/authentication/auth.service';
import { Profile } from '../models/profile';
import * as firebase from 'firebase/app';
import { WriteBatch } from '@google-cloud/firestore';

@Injectable({
  providedIn: 'root'
})
export class FollowProfileService {

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  follow(loggedInUserId: string, visitedUserId: string): void {
    console.log(loggedInUserId);
    console.log(visitedUserId);
    const batch = this.firestore.firestore.batch();
    this.createFollowing(loggedInUserId, visitedUserId);
    this.incrementFollowing(loggedInUserId);
    this.createFollower(loggedInUserId, visitedUserId);
    this.incrementFollower(visitedUserId);

    // batch.set(this.createFollowing(loggedInUserId, visitedUserId));
  }

  unFollow(): void {}

  createFollowing(loggedInUserId: string, visitedUserId: string): any {
    const userDocRef: AngularFirestoreDocument<any> = this.firestore
      .collection('users')
      .doc(loggedInUserId)
      .collection('following')
      .doc(visitedUserId);
    const newFollower = {
      follows: visitedUserId
    };
    // userDocRef.set(newFollower);
    return {userDocRef, newFollower};

  }

  incrementFollowing(loggedInUserId: string): void {
    const followingCounterRef: AngularFirestoreDocument<Profile> = this.firestore
      .collection('users')
      .doc(loggedInUserId);
    const increment = firebase.firestore.FieldValue.increment(1);
    followingCounterRef.update({ followingTotal: increment });
  }

  createFollower(loggedInUserId: string, visitedUserId: string): void {
    const userDocRef: AngularFirestoreDocument<any> = this.firestore
      .collection('users')
      .doc(visitedUserId)
      .collection('follower')
      .doc(loggedInUserId);
    const newFollower = {
      following: loggedInUserId
    };
    userDocRef.set(newFollower);
  }

  incrementFollower(visitedUserId: string): void {
    const followingCounterRef: AngularFirestoreDocument<Profile> = this.firestore
    .collection('users')
    .doc(visitedUserId);
    const increment = firebase.firestore.FieldValue.increment(1);
    followingCounterRef.update({ followerTotal: increment });
  }

  deleteFollowing(): void {}

  deleteFollower(): void {}

}
