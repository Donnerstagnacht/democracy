import { Component, Input, ElementRef } from '@angular/core';
import { Carousel } from 'materialize-css';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent {
  /*
    https://stackoverflow.com/questions/55667029/why-carousel-of-materialize-css-and-ngfor-not-working-together-dynamicaly-to-ge
  */
  @Input() imageList: string[];
  options = {
    fullWidth: false
  };
  carousel: Carousel;

  constructor(
    private hostElement: ElementRef,
  ) { }

  initCarousel() {
    if (!this.carousel) {
      this.carousel = Carousel.init(this.hostElement.nativeElement.querySelector('.carousel'), this.options);
    }
  }

}
