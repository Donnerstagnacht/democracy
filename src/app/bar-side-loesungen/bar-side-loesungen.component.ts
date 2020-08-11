import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-bar-side-loesungen',
  templateUrl: './bar-side-loesungen.component.html',
  styleUrls: ['./bar-side-loesungen.component.scss']
})
export class BarSideLoesungenComponent implements OnInit {
 sticky: boolean;

  constructor() {
    this.sticky = false;
   }

  ngOnInit(): void {
      this.toggleLoesungMenu();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
     this.toggleLoesungMenu();
  }
  /* Not optimal workaround: Fixed heights set because the offsetHeight property seems to work weird */

  /* Desktop menu */
  toggleLoesungMenu(): void {
  // console.log("Mobile windoq:" + window.pageYOffset);
  console.log('scrollen');
  if (window.pageYOffset < 540) {
    this.sticky = false;
  } else if (window.pageYOffset > 4100) {
      this.sticky = false;
  } else if (window.pageYOffset > 540) {
      this.sticky = true;
    }
  }

}
