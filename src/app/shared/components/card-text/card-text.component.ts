import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card-argument';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss']
})
export class CardTextComponent implements OnInit {
  @Input() card: Card;
  @Input() github: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
