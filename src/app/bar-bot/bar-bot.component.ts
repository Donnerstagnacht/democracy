import { Component, OnInit, Input } from '@angular/core';
import { BarBotCurtainService } from '../bar-bot-curtain.service';
import { MenuTab } from '../bar-side/menuTab';

@Component({
  selector: 'app-bar-bot',
  templateUrl: './bar-bot.component.html',
  styleUrls: ['./bar-bot.component.scss']
})
export class BarBotComponent implements OnInit {
  @Input() menuTabList: MenuTab[];
  @Input() logoutButton: boolean;
  open = false;

  constructor(private barBotCurtainService: BarBotCurtainService) { }

  ngOnInit(): void {
  }

 openNav(): void {
   this.barBotCurtainService.openNav();
  }

/* Closes the curtain menu on mobile*/
 closeNav(): void {
   if (this.menuTabList.length > 3) {
    this.barBotCurtainService.closeNav();
   }
 }

}
