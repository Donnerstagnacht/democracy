import { forEach } from '@angular-devkit/schematics';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
import { PostID } from 'src/app/shared/models/createPost';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
    ) { }

    // Adding Observable<PostID> to an Observable<PostID[]> array not working
  readPosts(): Observable<PostID[]> {
    const postsOfTimelineSubject: Subject<PostID[]> = new Subject();

    this.authService.getUserId().subscribe((uid) => {

      const timelineCollectionRef: AngularFirestoreCollection<PostID> = this.firestore
        .collection('users')
        .doc(uid)
        .collection('timeline');

      const idsOfTimelinePosts: Observable<string[]> = timelineCollectionRef.snapshotChanges().pipe(
        map((actions) => actions.map(a => {
          const id = a.payload.doc.id;
          return id;
        }))
      );

      let postsOfTimeline: Observable<PostID[]>;

      idsOfTimelinePosts.subscribe((ids: string[]) => {
        ids.forEach((postId: string) => {
        // console.log(postId); (works)
        const postDocRef: AngularFirestoreDocument<PostID> = this.firestore.doc('posts/' + postId);

        const loadedPostData: Observable<PostID> = postDocRef.snapshotChanges()
          .pipe(
            map((actions) => {
              const data = actions.payload.data();
              const id = actions.payload.id;
              return {id, ...data};
            })
          );
        // loadedPostData.subscribe(data => {console.log('snapshot', data); }); (works)

        });
      });

    });
    return postsOfTimelineSubject.asObservable();
  }
}
