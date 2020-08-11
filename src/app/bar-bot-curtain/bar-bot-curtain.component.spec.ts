import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarBotCurtainComponent } from './bar-bot-curtain.component';

describe('BarBotCurtainComponent', () => {
  let component: BarBotCurtainComponent;
  let fixture: ComponentFixture<BarBotCurtainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarBotCurtainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBotCurtainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
