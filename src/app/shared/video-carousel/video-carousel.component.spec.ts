import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCarouselComponent } from './video-carousel.component';

describe('VideoCarouselComponent', () => {
  let component: VideoCarouselComponent;
  let fixture: ComponentFixture<VideoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
