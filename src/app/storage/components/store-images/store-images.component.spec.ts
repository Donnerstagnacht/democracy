import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreImagesComponent } from './store-images.component';

describe('StoreImagesComponent', () => {
  let component: StoreImagesComponent;
  let fixture: ComponentFixture<StoreImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
