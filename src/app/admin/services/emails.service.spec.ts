import { TestBed } from '@angular/core/testing';

import { EmailsService } from './emails.service';

describe('EmailsService', () => {
  let service: EmailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
