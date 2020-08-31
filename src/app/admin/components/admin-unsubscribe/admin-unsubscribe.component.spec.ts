import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnsubscribeComponent } from './admin-unsubscribe.component';

describe('AdminUnsubscribeComponent', () => {
  let component: AdminUnsubscribeComponent;
  let fixture: ComponentFixture<AdminUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
