import { TestBed } from '@angular/core/testing';

import { FollowProfileService } from './follow-profile.service';

describe('FollowProfileService', () => {
  let service: FollowProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
