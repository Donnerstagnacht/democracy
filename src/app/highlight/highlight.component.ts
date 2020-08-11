import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {
  @Input() highlight: string;

  constructor() { }

  ngOnInit(): void {
  }

}
