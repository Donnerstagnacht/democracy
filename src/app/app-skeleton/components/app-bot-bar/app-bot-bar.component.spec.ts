import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBotBarComponent } from './app-bot-bar.component';

describe('AppBotBarComponent', () => {
  let component: AppBotBarComponent;
  let fixture: ComponentFixture<AppBotBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBotBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBotBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
