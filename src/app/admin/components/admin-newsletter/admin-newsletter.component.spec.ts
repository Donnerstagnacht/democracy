import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsletterComponent } from './admin-newsletter.component';

describe('AdminNewsletterComponent', () => {
  let component: AdminNewsletterComponent;
  let fixture: ComponentFixture<AdminNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
