import { TestBed } from '@angular/core/testing';

import { GeneralFormsService } from './general-forms.service';

describe('GeneralFormsService', () => {
  let service: GeneralFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
