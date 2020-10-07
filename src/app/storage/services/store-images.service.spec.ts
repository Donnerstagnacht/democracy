import { TestBed } from '@angular/core/testing';

import { StoreImagesService } from './store-images.service';

describe('StoreImagesService', () => {
  let service: StoreImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
