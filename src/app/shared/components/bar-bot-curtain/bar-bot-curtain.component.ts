import { Component, OnInit, Input } from '@angular/core';
import { BarBotCurtainService } from '../../services/bar-bot-curtain.service';
import { MenuTab } from '../../models/menuTab';
import { AuthService } from '../../../authentication/auth.service';

@Component({
  selector: 'app-bar-bot-curtain',
  templateUrl: './bar-bot-curtain.component.html',
  styleUrls: ['./bar-bot-curtain.component.scss']
})
export class BarBotCurtainComponent implements OnInit {
  @Input() menuTabList: MenuTab[];
  @Input() logoutButton: boolean;

  constructor(
    private barBotCurtainService: BarBotCurtainService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  openNav(): void {
    this.barBotCurtainService.openNav();
   }

 /* Closes the curtain menu on mobile*/
  closeNav(): void {
   this.barBotCurtainService.closeNav();
  }

  logout(): void {
    this.authService.logoutUser();
  }

}
