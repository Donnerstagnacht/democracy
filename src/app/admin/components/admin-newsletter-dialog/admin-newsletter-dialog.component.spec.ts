import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsletterDialogComponent } from './admin-newsletter-dialog.component';

describe('AdminNewsletterDialogComponent', () => {
  let component: AdminNewsletterDialogComponent;
  let fixture: ComponentFixture<AdminNewsletterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsletterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsletterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
