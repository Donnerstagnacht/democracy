import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData$: Observable<Profile>;
  editMode: boolean;

  constructor(
    private authService: AuthService,
    private angularFireStorage: AngularFireStorage,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.profileData$ = this.authService.readProfile(id);
        const loggedInUserId$: Observable<string> = this.authService.getUserId();
        loggedInUserId$.subscribe(uid => {
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

  deleteUser(): void {
    this.authService.deleteUser();
  }
}
