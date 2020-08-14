import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Question } from '../question';
import { Collapsible } from 'materialize-css';


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

  elem: HTMLElement;
  instance: Collapsible;


  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.elem = this.elRef.nativeElement.querySelector('.collapsible');
    this.instance = Collapsible.init(this.elem);
  }

}
