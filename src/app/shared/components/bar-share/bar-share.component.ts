import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-share',
  templateUrl: './bar-share.component.html',
  styleUrls: ['./bar-share.component.scss']
})
export class BarShareComponent implements OnInit {
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
    this.link = 'www.google.com';
  }

}
