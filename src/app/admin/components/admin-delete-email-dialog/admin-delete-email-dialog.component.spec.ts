import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteEmailDialogComponent } from './admin-delete-email-dialog.component';

describe('AdminDeleteEmailDialogComponent', () => {
  let component: AdminDeleteEmailDialogComponent;
  let fixture: ComponentFixture<AdminDeleteEmailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteEmailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
