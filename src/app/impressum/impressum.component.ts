import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
