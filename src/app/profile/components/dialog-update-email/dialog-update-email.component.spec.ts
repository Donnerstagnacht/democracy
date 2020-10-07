import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateEmailComponent } from './dialog-update-email.component';

describe('DialogUpdateEmailComponent', () => {
  let component: DialogUpdateEmailComponent;
  let fixture: ComponentFixture<DialogUpdateEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUpdateEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
