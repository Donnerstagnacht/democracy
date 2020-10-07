import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAdminPermissionComponent } from './no-admin-permission.component';

describe('NoAdminPermissionComponent', () => {
  let component: NoAdminPermissionComponent;
  let fixture: ComponentFixture<NoAdminPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAdminPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAdminPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
