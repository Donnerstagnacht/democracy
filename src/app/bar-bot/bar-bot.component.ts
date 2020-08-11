import { Component, OnInit } from '@angular/core';
import { BarBotCurtainService } from '../bar-bot-curtain.service';

@Component({
  selector: 'app-bar-bot',
  templateUrl: './bar-bot.component.html',
  styleUrls: ['./bar-bot.component.scss']
})
export class BarBotComponent implements OnInit {
  open = false;


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
