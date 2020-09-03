import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {
  @Input() highlight$: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.highlight$.subscribe();
  }

}
