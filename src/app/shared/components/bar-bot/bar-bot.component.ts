import { Component, OnInit, Input } from '@angular/core';
import { BarBotCurtainService } from '../../services/bar-bot-curtain.service';
import { MenuTab } from '../../models/menuTab';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-bot',
  templateUrl: './bar-bot.component.html',
  styleUrls: ['./bar-bot.component.scss']
})
export class BarBotComponent implements OnInit {
  @Input() menuTabList$: Observable<MenuTab[]>;
  @Input() logoutButton: boolean;
  open = false;

  length: number;

  constructor(private barBotCurtainService: BarBotCurtainService) { }

  ngOnInit(): void {
    this.menuTabList$.subscribe((array) => {this.length = array.length; });
  }

 openNav(): void {
   this.barBotCurtainService.openNav();
  }

/* Closes the curtain menu on mobile*/
 closeNav(): void {
    this.barBotCurtainService.closeNav();
 }

}
