import { Component, OnInit, Input } from '@angular/core';
import { BarBotCurtainService } from '../bar-bot-curtain.service';
import { MenuTab } from '../bar-side/menuTab';

@Component({
  selector: 'app-bar-bot-curtain',
  templateUrl: './bar-bot-curtain.component.html',
  styleUrls: ['./bar-bot-curtain.component.scss']
})
export class BarBotCurtainComponent implements OnInit {
  @Input() menuTabList: MenuTab[];

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
