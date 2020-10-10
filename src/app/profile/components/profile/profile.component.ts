import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
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
    private angularFireStorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.profileData$ = this.authService.readLoggedInUserProfile();
    this.profileData$.subscribe((profileData) => {
      const path = profileData.profileImage;
      console.log(path);

      const ref = this.angularFireStorage.storage.ref(path);
      const downloadUrl = ref.getDownloadURL();
      console.log('url', downloadUrl);
    });
    this.editMode = true;
  }

  deleteUser(): void {
    this.authService.deleteUser();
  }
}
