import { Component, OnInit, HostListener, Input } from '@angular/core';
import { MenuTab } from '../bar-side/menuTab';

@Component({
  selector: 'app-bar-side-submenu',
  templateUrl: './bar-side-submenu.component.html',
  styleUrls: ['./bar-side-submenu.component.scss']
})
export class BarSideSubmenuComponent implements OnInit {
  @Input() menuTabList: MenuTab[];
  @Input() stickyStart: number;
  @Input() stickyEnd: number;
  sticky: boolean;

  constructor() {
    this.sticky = false;
   }

  ngOnInit(): void {
      this.toggleSubMenu();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
     this.toggleSubMenu();
  }
  /* Not optimal workaround: Fixed heights set because the offsetHeight property seems to work weird */

  toggleSubMenu(): void {
    if (window.pageYOffset > this.stickyStart && window.pageYOffset < this.stickyEnd) {
      this.sticky = true;
    } else {
        this.sticky = false;
    }
  }

}
