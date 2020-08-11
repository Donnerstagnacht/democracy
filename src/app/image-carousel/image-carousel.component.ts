import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  /*
  https://stackoverflow.com/questions/55667029/why-carousel-of-materialize-css-and-ngfor-not-working-together-dynamicaly-to-ge

  */
  @Input() imageList: string[];

  constructor() { }

  ngOnInit(): void {
    // Need an asynchrounious solution
  }

}
