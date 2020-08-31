import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSendEmailDialogComponent } from './admin-send-email-dialog.component';

describe('AdminSendEmailDialogComponent', () => {
  let component: AdminSendEmailDialogComponent;
  let fixture: ComponentFixture<AdminSendEmailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSendEmailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSendEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
