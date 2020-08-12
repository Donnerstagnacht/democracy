import { Component, OnInit, Input } from '@angular/core';
import { MenuTab } from './menuTab';

@Component({
  selector: 'app-bar-side',
  templateUrl: './bar-side.component.html',
  styleUrls: ['./bar-side.component.scss']
})
export class BarSideComponent implements OnInit {
  @Input() menuTablList: MenuTab[];
  constructor() { }

  ngOnInit(): void {
  }

}
