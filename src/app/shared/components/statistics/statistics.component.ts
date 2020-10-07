import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @Input() number: number;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
    // this.statistics.subscribe((data) => {  console.log(data); }
    // );
  }

}
