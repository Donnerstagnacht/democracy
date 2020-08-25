import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSubscriberDialogComponent } from './admin-edit-subscriber-dialog.component';

describe('AdminEditSubscriberDialogComponent', () => {
  let component: AdminEditSubscriberDialogComponent;
  let fixture: ComponentFixture<AdminEditSubscriberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditSubscriberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditSubscriberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
