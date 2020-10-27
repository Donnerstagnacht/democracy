import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
import { CreatePost, PostID } from 'src/app/shared/models/createPost';
import { Profile } from '../../models/profile';
import { FollowProfileService } from '../../services/follow-profile.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData$: Observable<Profile>;
  editMode: boolean;
  loggedInUserId$: Observable<string>;
  alreadyFollowing: boolean;
  profilePosts$: Observable<PostID[]>;

  constructor(
    private authService: AuthService,
    private angularFireStorage: AngularFireStorage,
    private route: ActivatedRoute,
    private followProfileService: FollowProfileService,
    private profileService: ProfileService,
    private firestore: AngularFirestore
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.profileData$ = this.authService.readProfile(id);
        this.loggedInUserId$ = this.authService.getUserId();
        this.isVisitedUserEqualToLoggedInUser(id);
        this.readProfilePosts(id);
        this.isAlreadyFollowing(id);
      } else {
        this.profileData$ = this.authService.readLoggedInUserProfile();
        this.profileData$.subscribe(profileData => {
          this.readProfilePosts(profileData.uid);
        });
        this.editMode = true;
      }
    });
  }

  isVisitedUserEqualToLoggedInUser(id: string): void {
    this.loggedInUserId$.subscribe(uid => {
      if (id === uid) {
        this.editMode = true;
      } else {
        this.editMode = false;
      }
    });
  }

  isAlreadyFollowing(id: string): void {
    this.loggedInUserId$.pipe(take(1)).subscribe(loggedInUserId => {
      console.log(loggedInUserId);
      this.profileData$.pipe(take(1)).subscribe(profileData => {
        console.log('test');
        const visitedUserId = profileData.uid;
        this.followProfileService.isAlreadyFollowing(loggedInUserId, visitedUserId).subscribe(document => {
          if (document) {
            console.log('true');
            console.log(document);
            this.alreadyFollowing = true;
          } else {
            console.log('false');
            this.alreadyFollowing = false;
          }
        });
      });
    });
  }

  follow(): void {
    this.loggedInUserId$.pipe(take(1)).subscribe(loggedInUserId => {
      console.log(loggedInUserId);
      this.profileData$.pipe(take(1)).subscribe(profileData => {
        console.log('test');
        const visitedUserId = profileData.uid;
        this.followProfileService.follow(loggedInUserId, visitedUserId);
      });
    });

  }

  unFollow(): void {
    this.loggedInUserId$.pipe(take(1)).subscribe(loggedInUserId => {
      console.log(loggedInUserId);
      this.profileData$.pipe(take(1)).subscribe(profileData => {
        console.log('test');
        const visitedUserId = profileData.uid;
        this.followProfileService.unFollow(loggedInUserId, visitedUserId);
      });
    });
  }

  readProfilePosts(uid: string): void {
    const postCollection = this.firestore.collection<CreatePost>('posts', ref => {
      return ref.where('author', '==', uid);
    });
    this.profilePosts$ = postCollection.snapshotChanges().pipe(
    map((actions) => actions.map(a => {
          const data = a.payload.doc.data() as CreatePost;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
    );
  }
}
