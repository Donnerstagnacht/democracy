import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-faq-controller',
  templateUrl: './faq-controller.component.html',
  styleUrls: ['./faq-controller.component.scss']
})
export class FaqControllerComponent implements OnInit {
  @Input() link: string;
  functionalQuestions: Question[] = [
    {
      question: 'Welches Alleinstellungsmerkmal hat unsere App gegenüber anderen sozialen Netzwerken?',
      answer: `Es gibt kein anderes soziales Netzwerk, dass es innerparteiliche Prozesse in Realtime abbildet.`
    }
  ];

  legalQuestions: Question[] = [
    {
      question: 'Werden durch die App Entscheidungen online getroffen?',
      answer: `Nein, es werden keine Entscheidungen online getroffen. Alle Entscheidungen werden offline getroffen
       und online gespiegelt. Der Prozess zur Entscheidungsfindung kann jedoch online erfolgen.`
    },
    {
      question: 'Müssen für die Einführung dieser App Satzungen geändert werden?',
      answer: `Nein, die App spiegelt nur Entscheidungen, welche in der Realität auf den in der Satzung
       vorgesehenen Wegen entschieden werden. Es werden allerdings die Prozesse rund um die Entscheidung
       automatisiert, sodass Inhalte der Satzungen (z.B. Entscheidungen) effizienter abgearbeitet werden können.`
    },
  ];

  introductionQuestions: Question[] = [
    {
      question: 'Wie würde die Nutzung eingeführt werden?',
      answer: `Sobald die Beta Version zur Verfügung steht, können sich Gliederungen
      als Tester melden. Der Test müsste dann demokratisch beschlossen werden.`
    },
    {
      question: 'Wie steht der Generalsekretär zu diesem Projekt?',
      answer: `Sowohl der Parteivorstand und der Generalsekretär sind über dieses
      Projekt informiert. Das Projekt wurde zudem mehrfach in Berlin vorgestellt, wo Interesse bekundet wurde. Der
      Bundesparteitag 2019 hat die Einführung eines solchen Systems zudem formal im Leitantrag beschlossen.`
    },
  ];

  implementationQuestions: Question[] = [
    {
      question: 'Mit welchem Programm wurde der Klick Dummy erstellt?',
      answer: `Der Prototyp wurde mit dem kostenfreien Programm Adobe XD der Adobe
      Creative Cloud erstellt. Adobe XD oder Figma sind unsere bisherigen Favoriten zum Prototype Design.`
    },
    {
      question: 'Gibt es schon einen Vorschlag zur Implementation?',
      answer: `Ja, wir würden eine progressive Web App bevorzugen, da diese
      plattformunabhängig ist. Dazu präferieren wir aktuell Angular + MaterializeCSS in Verbindung mit
      AngularFire und Firestore. Eine andere aktuell betrachtete Lösung ist Angular + MaterializeCSS in
      Verbindung mit Express und MySQL.`
    },
    {
      question: 'Wo finde ich weitere Informationen zur technischen Umsetzung?',
      answer: `Weitere Informationen zur technischen Umsetzung findest du in unserem
      Tech-Blog oder in unserem Github Repository.`
    },
    {
      question: 'Warum wird über eine Google Datenbank nachgedacht?',
      answer: `Google Firestore ist eine hochmoderne und Cloud basierte NoSQL Datenbank, die
      mit einer großzügigen Free-Tier kostenlos zur Verfügung steht. Da dieses Projekt bisher mit einem ehrenamtlichen Entwickler
      über äußerst limitierte Ressourcen verfügt, bieted Firestore einen guten Start um schnell zum Ziel zu kommen.`
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
