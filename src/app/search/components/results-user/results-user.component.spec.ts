import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsUserComponent } from './results-user.component';

describe('ResultsUserComponent', () => {
  let component: ResultsUserComponent;
  let fixture: ComponentFixture<ResultsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
