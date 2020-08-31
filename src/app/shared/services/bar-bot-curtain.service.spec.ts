import { TestBed } from '@angular/core/testing';

import { BarBotCurtainService } from './bar-bot-curtain.service';

describe('BarBotCurtainService', () => {
  let service: BarBotCurtainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarBotCurtainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
