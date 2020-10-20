import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarBotLoginComponent } from './bar-bot-login.component';

describe('BarBotLoginComponent', () => {
  let component: BarBotLoginComponent;
  let fixture: ComponentFixture<BarBotLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarBotLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBotLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
