import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Carousel } from 'materialize-css';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.scss']
})
export class VideoCarouselComponent implements OnInit {
  @Input() videoList: string[];
  options = {
    fullWidth: true,
    indicators: true,
  };
  carousel: Carousel;

  constructor(
    private hostElement: ElementRef,
  ) { }

  ngOnInit() {}

  initCarousel() {
    if (!this.carousel) {
      this.carousel = Carousel.init(this.hostElement.nativeElement.querySelector('.carousel'), this.options);
    }
  }

}
