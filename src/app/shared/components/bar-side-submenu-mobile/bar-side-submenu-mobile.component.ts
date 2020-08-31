import { Component, OnInit, HostListener, Input } from '@angular/core';
import { MenuTab } from '../bar-side/menuTab';

@Component({
  selector: 'app-bar-side-submenu-mobile',
  templateUrl: './bar-side-submenu-mobile.component.html',
  styleUrls: ['./bar-side-submenu-mobile.component.scss']
})
export class BarSideSubmenuMobileComponent implements OnInit {
  @Input() menuTabList: MenuTab[];
  @Input() stickyStart: number;
  @Input() stickyEnd: number;
  sticky: boolean;

  constructor() {
    this.sticky = false;
   }

  ngOnInit(): void {
    this.toggleSubMenuMobile();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.toggleSubMenuMobile();
 }

  toggleSubMenuMobile(): void {
    if (window.pageYOffset > this.stickyStart && window.pageYOffset < this.stickyEnd) {
      this.sticky = true;
    } else {
        this.sticky = false;
    }
  }

}
