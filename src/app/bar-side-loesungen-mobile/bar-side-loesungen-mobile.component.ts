import { Component, OnInit, HostListener } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-bar-side-loesungen-mobile',
  templateUrl: './bar-side-loesungen-mobile.component.html',
  styleUrls: ['./bar-side-loesungen-mobile.component.scss']
})
export class BarSideLoesungenMobileComponent implements OnInit {
  sticky: boolean;

  constructor() {
    this.sticky = false;
   }

  ngOnInit(): void {
    this.toggleLoesungMenuMobile();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.toggleLoesungMenuMobile();
 }

  toggleLoesungMenuMobile(): void {
    if (window.pageYOffset < 1130) {
      this.sticky = false;
    } else if (window.pageYOffset > 7700) {
        this.sticky = false;
    } else if (window.pageYOffset > 1130) {
        this.sticky = true;
    }
  }

}
