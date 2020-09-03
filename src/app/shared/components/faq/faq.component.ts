import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Collapsible } from 'materialize-css';
import { Question } from '../../../webpage/models/question';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input() questions$: Observable<Question[]>;

  elem: HTMLElement;
  instance: Collapsible;


  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.questions$.subscribe();
    this.elem = this.elRef.nativeElement.querySelector('.collapsible');
    this.instance = Collapsible.init(this.elem);
  }

}
