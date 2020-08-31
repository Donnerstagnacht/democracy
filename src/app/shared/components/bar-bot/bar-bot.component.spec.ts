import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarBotComponent } from './bar-bot.component';

describe('BarBotComponent', () => {
  let component: BarBotComponent;
  let fixture: ComponentFixture<BarBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
