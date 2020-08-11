import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../team-member';

@Component({
  selector: 'app-team-member-controller',
  templateUrl: './team-member-controller.component.html',
  styleUrls: ['./team-member-controller.component.scss']
})
export class TeamMemberControllerComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
