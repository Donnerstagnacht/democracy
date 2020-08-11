import { Component, OnInit } from '@angular/core';
import { BarBotCurtainService } from '../bar-bot-curtain.service';

@Component({
  selector: 'app-bar-bot-curtain',
  templateUrl: './bar-bot-curtain.component.html',
  styleUrls: ['./bar-bot-curtain.component.scss']
})
export class BarBotCurtainComponent implements OnInit {

  constructor(private barBotCurtainService: BarBotCurtainService) { }

  ngOnInit(): void {
  }

  openNav(): void {
    this.barBotCurtainService.openNav();
   }

 /* Closes the curtain menu on mobile*/
  closeNav(): void {
   this.barBotCurtainService.closeNav();
  }

}
