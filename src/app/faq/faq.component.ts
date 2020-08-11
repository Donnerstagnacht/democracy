import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
@Input() questions: Question[] = [{
  question: 'Welches Alleinstellungsmerkmal hat unsere App gegenüber anderen sozialen Netzwerken?',
  answer: 'Es gibt kein anderes soziales Netzwerk, dass innerparteiliche Prozesse in Realtime abbildet.'
}];


  constructor() { }

  ngOnInit(): void {

  }

}
