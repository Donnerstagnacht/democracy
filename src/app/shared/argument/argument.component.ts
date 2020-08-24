import { Component, OnInit, Input } from '@angular/core';
import { Brick } from './brick';

@Component({
  selector: 'app-argument',
  templateUrl: './argument.component.html',
  styleUrls: ['./argument.component.scss']
})
export class ArgumentComponent implements OnInit {
  @Input() bricks: Brick[];
  @Input() headline: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
