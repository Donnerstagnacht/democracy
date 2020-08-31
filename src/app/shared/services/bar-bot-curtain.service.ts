import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarBotCurtainService {
  open = false;

  constructor() { }

  openNav(): void {
    if (!this.open) {
      console.log('open');
      document.getElementById('bot-nav').style.width = '100%';
      document.getElementById('mehr').innerHTML = 'CLOSE';
      this.open = true;
    } else {
      this.closeNav();
    }
  }

/* Closes the curtain menu on mobile*/
  closeNav(): void {
    console.log('close');

    document.getElementById('bot-nav').style.width = '0%';
    document.getElementById('mehr').innerHTML = 'MEHR';
    this.open = false;
    }
}
