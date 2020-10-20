import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GeneralFormsService } from 'src/app/shared/services/general-forms.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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
    this.searchService.searchUser(searchTerm);
  }

  errorHandling(form: FormGroup, control: string, error: string): boolean {
    return this.generalFormsService.errorHandling(form, control, error);
  }

}
