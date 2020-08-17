import { TestBed } from '@angular/core/testing';

import { AdminEmailReplyCurtainService } from './admin-email-reply-curtain.service';

describe('AdminEmailReplyCurtainService', () => {
  let service: AdminEmailReplyCurtainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEmailReplyCurtainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
