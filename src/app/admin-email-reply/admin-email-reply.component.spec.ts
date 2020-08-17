import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmailReplyComponent } from './admin-email-reply.component';

describe('AdminEmailReplyComponent', () => {
  let component: AdminEmailReplyComponent;
  let fixture: ComponentFixture<AdminEmailReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmailReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmailReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
