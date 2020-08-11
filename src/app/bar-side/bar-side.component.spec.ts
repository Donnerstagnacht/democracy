import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSideComponent } from './bar-side.component';

describe('BarSideComponent', () => {
  let component: BarSideComponent;
  let fixture: ComponentFixture<BarSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
