import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSideLoginComponent } from './bar-side-login.component';

describe('BarSideLoginComponent', () => {
  let component: BarSideLoginComponent;
  let fixture: ComponentFixture<BarSideLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSideLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSideLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
