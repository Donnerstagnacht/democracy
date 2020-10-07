import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.profileData$ = this.authService.readLoggedInUserProfile();
    this.editMode = true;
  }

  deleteUser(): void {
    this.authService.deleteUser();
  }
}
