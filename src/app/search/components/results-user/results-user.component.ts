import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/models/profile';

@Component({
  selector: 'app-results-user',
  templateUrl: './results-user.component.html',
  styleUrls: ['./results-user.component.scss']
})
export class ResultsUserComponent implements OnInit {
  @Input() user: Profile;
  constructor() { }

  ngOnInit(): void {
  }

}
