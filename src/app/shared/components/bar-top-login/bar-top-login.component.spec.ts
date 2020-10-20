import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTopLoginComponent } from './bar-top-login.component';

describe('BarTopLoginComponent', () => {
  let component: BarTopLoginComponent;
  let fixture: ComponentFixture<BarTopLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarTopLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTopLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
