import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteMessageDialogComponent } from './admin-delete-message-dialog.component';

describe('AdminDeleteMessageDialogComponent', () => {
  let component: AdminDeleteMessageDialogComponent;
  let fixture: ComponentFixture<AdminDeleteMessageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteMessageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
