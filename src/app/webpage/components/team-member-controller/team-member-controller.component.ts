import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from '../../models/team-member';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-team-member-controller',
  templateUrl: './team-member-controller.component.html',
  styleUrls: ['./team-member-controller.component.scss']
})
export class TeamMemberControllerComponent implements OnInit {
  @Input() link: string;
  // Works also for multiple team members
  teamMembers: TeamMember[] = [
    {
      name: 'Tobias Hassebrock',
      image: '../assets/images/profile-small.jpg',
      motivationArguments: [
        `Ich bin überzeugt, dass globale Herausforderungen, wie der Klimawandel oder die Coronakrise auch globale Lösungen brauchen.`,
        `Gleichzeitig muss Politik lokale Probleme lösen. Lokale Probleme gibt es aber meist mehrfach auf der Welt.`,
        `Beide Problemtypen sind mit einer vernetzen Plattform besser zu lösen. Das ist unser Ziel!`
      ],
      educationArguments: [
        'Bachelor Politikwissenschaft',
        'Bachelor Volkswirtschaft',
        'Grundlagen Webdevelopment'
      ]
    }
  ];

  teamMembers$: Observable<TeamMember[]>;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.teamMembers$ = this.languageService.getTranslationObservable('teamMembers', 'landing');
    this.teamMembers$.subscribe();
  }

}
