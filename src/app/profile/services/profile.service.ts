import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private firestore: AngularFirestore) { }

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

  readProfiles(): Observable<Profile[]> {
    const profileCollection = this.firestore.collection<Profile>('users');
    const profiles = profileCollection.snapshotChanges().pipe(
      map((actions) => actions.map( a => {
        const data = a.payload.doc.data() as Profile;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    return profiles;
  }

  updateProfile(): void {}
}
