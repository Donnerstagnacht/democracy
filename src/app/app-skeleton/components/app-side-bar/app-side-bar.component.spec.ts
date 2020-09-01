import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideBarComponent } from './app-side-bar.component';

describe('AppSideBarComponent', () => {
  let component: AppSideBarComponent;
  let fixture: ComponentFixture<AppSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
