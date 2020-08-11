import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-bar-side-loesungen-tablet',
  templateUrl: './bar-side-loesungen-tablet.component.html',
  styleUrls: ['./bar-side-loesungen-tablet.component.scss']
})
export class BarSideLoesungenTabletComponent implements OnInit {
  sticky: boolean;

  constructor() {
    this.sticky = false;
   }

  ngOnInit(): void {
    this.toggleLoesungMenuTablet();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.toggleLoesungMenuTablet();
 }

  toggleLoesungMenuTablet(): void {
    if (window.pageYOffset < 710) {
      this.sticky = false;
    } else if (window.pageYOffset > 4300) {
        this.sticky = false;
    } else if (window.pageYOffset > 710) {
        this.sticky = true;
    }
  }

}
