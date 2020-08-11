import { Component, OnInit } from '@angular/core';
import { Brick } from './argument/brick';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'democracy-life';
  ngOnInit(): void {
  }
}
