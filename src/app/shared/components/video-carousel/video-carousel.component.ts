import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Carousel } from 'materialize-css';
import { LanguageService } from '../../services/language.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

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

  helperShowed: boolean;
  helperMessage$: Observable<string>;

  constructor(
    private hostElement: ElementRef,
    private languageService: LanguageService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.helperShowed = false;
    this.helperMessage$ = this.languageService.getTranslationObservable('videoHelper', 'landing');
  }

  initCarousel(): void {
    if (!this.carousel) {
      this.carousel = Carousel.init(this.hostElement.nativeElement.querySelector('.carousel'), this.options);
    }
  }

  showHelper(): void {
    if (!this.helperShowed && this.videoList.length > 1) {
      this.helperShowed = true;
      this.helperMessage$.subscribe((helperMessage) => {
        this.matSnackBar.open(helperMessage, 'ok', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      });
    }
  }

}
