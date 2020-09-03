import { Component, OnInit, Input } from '@angular/core';
import { Brick } from '../../models/brick';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-argument',
  templateUrl: './argument.component.html',
  styleUrls: ['./argument.component.scss']
})
export class ArgumentComponent implements OnInit {
  @Input() arguments: Observable<Brick[]>;
  @Input() headline: Observable<string>;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
    this.arguments.subscribe((bricks) => {});
  }

}
