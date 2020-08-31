import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnsubscribeDialogComponent } from './admin-unsubscribe-dialog.component';

describe('AdminUnsubscribeDialogComponent', () => {
  let component: AdminUnsubscribeDialogComponent;
  let fixture: ComponentFixture<AdminUnsubscribeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUnsubscribeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnsubscribeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
