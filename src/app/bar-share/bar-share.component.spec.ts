import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarShareComponent } from './bar-share.component';

describe('BarShareComponent', () => {
  let component: BarShareComponent;
  let fixture: ComponentFixture<BarShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
