import { Component, OnInit } from '@angular/core';
import { Card } from '../../../shared/models/card-argument';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-card-controller',
  templateUrl: './card-controller.component.html',
  styleUrls: ['./card-controller.component.scss']
})
export class CardControllerComponent implements OnInit {
  cards: Card[] = [
    {
      cardTitle: 'Design mit uns!',
      cardText: `Lass deinen Vorstellungen beim Designen von Prototypen freien Lauf! Bring deine
      Kreativität ein, verbessere unser User Interface und sorge für eine geschmeidigere User Experience!`
    },
    {
      cardTitle: 'Programmiere mit uns!',
      cardText: `Programmiere ein globales Tool für Politiker und Politikinteressierte weltweit!
      Wir möchten dich in unserem Team, wenn du Lust hast eine moderne Frondend Application zu entwickeln,
      leistungsstarke Backends zu designen oder Suchfunktionen zu optimieren!`
    },
    {
      cardTitle: 'Erzähl von uns!',
      cardText: `Erzähl deinen Freunden, Verwandten, Arbeitskollegen und allen Menschen von denen du
      glaubst, dass sie uns cool finden würden!`
    },
    {
      cardTitle: 'Spende für uns!',
      cardText: `Spende uns einen einmaligen oder monatlichen Beitrag, damit das Projekt sein Ziel
      erreicht!`
    },
  ];

  cards$: Observable<Card[]>;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.cards$ = this.languageService.getTranslationObservable('cards', 'landing');
    this.cards$.subscribe();
  }

}
