import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Profile } from '../profile/models/profile';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore,
    private matSnackBar: MatSnackBar,
  ) { }

  createUser(email: string, password: string): void {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      this.createUserInFirestore(user);
      this.router.navigate(['admin']);
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  createUserInFirestore(user: firebase.auth.UserCredential): void {
    const userDocRef: AngularFirestoreDocument<Profile> = this.firestore.doc(`users/${user.user.uid}`);
    const newUser = {
      uid: user.user.uid,
      email: user.user.email,
      displayName: '',
      hashtags: [''],
      admin: false,
      followerTotal: 0,
      // follower: Profile[];
      followingTotal: 0,
      // following: Profile[];
      groupsTotal: 0,
      // groups: Groups[];
      postsTotal: 0,
      // posts: Posts[];
      ideasTotal: 0,
      // ideas: Ideas[];
      introduction: '',
      profileImage: '../assets/images/profile-small.jpg',
      dateRegistration: '',
      politicalOrganisationNames: [''],
      localOrganisation: '',
      regionalOrganisation: '',
      nationalOrganisation: '',
      transnationalOrganisation: ''
    };
    userDocRef.set(newUser);
  }

  loginUser(email: string, password: string): void {
    this.auth.signInWithEmailAndPassword(email, password)
    .then (user => {
      console.log('user logged in: ', user);
      this.router.navigate(['admin']);
    }).catch((error) => {
      // return error.message;
      this.openSnackbar(error.message);
      // window.alert(error.message);
    });
  }

  confirmLoginUser(email: string, password: string): Promise<boolean> {
    return this.auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      return true;
    })
    .catch((error) => {
      // this.openSnackbar(error.message);
      return false;
    });
  }

  logoutUser(): void {
    this.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

  updateUser(
    userId: string,
    updateData: {
      displayName: string,
      localOrganisation: string,
      regionalOrganisation: string,
      nationalOrganisation: string,
      transnationalOrganisation: string
    }
    ): void {
    const userDocRef: AngularFirestoreDocument<Profile> = this.firestore.doc(`users/${userId}`);
    userDocRef.update(updateData).then(() => {
      this.router.navigate(['profile']);
    });
  }

  updateProfileImage(path: string): void {
    this.getUserId().subscribe((userId: string) => {
      const userDocRef: AngularFirestoreDocument<Profile> = this.firestore.doc(`users/${userId}`);
      userDocRef.update({profileImage: path}).then(() => {
        this.router.navigate(['profile']);
      }
      );
    });
  }

  // throws error: Cannot read property 'delete' of null at SafeSubscriber.
  deleteUser(): void {
    this.auth.authState.subscribe(currentUser => {
      const userDocRef: AngularFirestoreDocument<Profile> = this.firestore.doc(`users/${currentUser.uid}`);
      userDocRef.delete();
      currentUser.delete()
      .then(() => {
        this.router.navigate(['login']);
      });
    }
    );
  }

  updatePassword(newPassword: string): void {
    this.auth.authState.subscribe(currentUser => {
      currentUser.updatePassword(newPassword);
    });
  }

  updateEmail(newEmail: string, userId: string): void {
    this.auth.authState.subscribe(currentUser => {
      currentUser.updateEmail(newEmail).then(() => {
        const userDocRef: AngularFirestoreDocument<Profile> = this.firestore.doc(`users/${userId}`);
        const updateData = {
          email: newEmail
        };
        userDocRef.update(updateData);
      });
    });
  }

  resetPasswordByEmail(email: string): void {
    this.auth.sendPasswordResetEmail(email)
    .then(() => {
      console.log('EMail send');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  readLoggedInUserProfile(): Observable<Profile> {
    return this.auth.authState.pipe(
      switchMap((userdata) => {
        return this.readProfile(userdata.uid);
      }
   ));
  }

  readProfile(userId: string): Observable<Profile> {
      const docRef = this.firestore.doc<Profile>('users/' + userId);
      return docRef.snapshotChanges()
      .pipe(
        map((actions) => {
          const data = actions.payload.data();
          const id = actions.payload.id;
          console.log('payload', actions.payload);
          return {id, ...data};
        })
      );
  }

  getUserId(): Observable<string> {
    return this.auth.authState.pipe(
      map((userdata) => {
        return userdata.uid;
      }));
  }

  openSnackbar(message: string) {
    this.matSnackBar.open(message, 'ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
