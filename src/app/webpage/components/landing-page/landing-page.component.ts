import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  counter = 1;

  constructor() {}

  ngOnInit(): void {
    /*
    const typed = new Typed('#typed', {
      strings: [this.slogang],
      typeSpeed: 40,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    });*/
    this.delay();
  }

  /* Toggles images*/
  async delay(): Promise<{}> {
      while (true) {
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 10000);
        });
        this.hideElement();
      }
    }

  /* Toggles elements */
  hideElement(): void {
    this.counter++;
    if (this.counter > 13) {
      this.counter = this.counter - 13;
    }
  }

}
