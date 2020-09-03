import { Component, OnInit, Input } from '@angular/core';
import { MenuTab } from '../../models/menuTab';
import { AuthService } from '../../../authentication/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-side',
  templateUrl: './bar-side.component.html',
  styleUrls: ['./bar-side.component.scss']
})
export class BarSideComponent implements OnInit {
  @Input() menuTablList$: Observable<MenuTab[]>;
  @Input() logoutButton: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.menuTablList$.subscribe();
  }

  logout(): void {
    this.authService.logoutUser();
  }

}
