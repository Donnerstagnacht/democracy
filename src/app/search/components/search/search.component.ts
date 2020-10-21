import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/profile/models/profile';
import { GeneralFormsService } from 'src/app/shared/services/general-forms.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  userSearchResults: Observable<Profile[]>;

  searchUserForm = this.fb.group({
    searchTerm: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private generalFormsService: GeneralFormsService
    ) { }

  ngOnInit(): void {
  }

  searchUser() {
    const searchTerm = this.searchUserForm.value.searchTerm;
    console.log('searching for', searchTerm);
    this.userSearchResults = this.searchService.searchUser(searchTerm);
    this.userSearchResults.subscribe(() => {
      console.log(this.userSearchResults);
    });
  }

  errorHandling(form: FormGroup, control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(form, control, error);
  }

}
