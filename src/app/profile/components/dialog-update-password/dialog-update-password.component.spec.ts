import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdatePasswordComponent } from './dialog-update-password.component';

describe('DialogUpdatePasswordComponent', () => {
  let component: DialogUpdatePasswordComponent;
  let fixture: ComponentFixture<DialogUpdatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUpdatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
