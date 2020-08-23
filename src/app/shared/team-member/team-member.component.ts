import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from 'src/app/team-member';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  @Input() teamMember: TeamMember;

  constructor() {
   }

  ngOnInit(): void {
  }

}
