import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotBarCurtainComponent } from './bot-bar-curtain.component';

describe('BotBarCurtainComponent', () => {
  let component: BotBarCurtainComponent;
  let fixture: ComponentFixture<BotBarCurtainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotBarCurtainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotBarCurtainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
