import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/profile/models/profile';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private profileService: ProfileService) { }

  searchUser(searchTerm: string): Observable<Profile[]> {
    // implement search function, returning an observable of type
    // list of profiles based on the searchTerm
    const profile = this.profileService.readProfiles(); // delete this function once search function implemented
    return profile;
  }
}
