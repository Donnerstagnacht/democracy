import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
import { Profile } from '../../models/profile';
import { FollowProfileService } from '../../services/follow-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData$: Observable<Profile>;
  editMode: boolean;
  loggedInUserId$: Observable<string>;

  constructor(
    private authService: AuthService,
    private angularFireStorage: AngularFireStorage,
    private route: ActivatedRoute,
    private followProfileService: FollowProfileService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.profileData$ = this.authService.readProfile(id);
        this.loggedInUserId$ = this.authService.getUserId();
        this.loggedInUserId$.subscribe(uid => {
          if (id === uid) {
            this.editMode = true;
          } else {
            this.editMode = false;
          }
        });
      } else {
        this.profileData$ = this.authService.readLoggedInUserProfile();
        this.editMode = true;
      }
    });
    this.editMode = true;
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
    this.followProfileService.unFollow();
  }

  deleteUser(): void {
    this.authService.deleteUser();
  }
}
