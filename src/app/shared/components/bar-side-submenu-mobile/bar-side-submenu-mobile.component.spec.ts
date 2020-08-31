import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSideSubmenuMobileComponent } from './bar-side-submenu-mobile.component';

describe('BarSideLoesungenMobileComponent', () => {
  let component: BarSideSubmenuMobileComponent;
  let fixture: ComponentFixture<BarSideSubmenuMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSideSubmenuMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSideSubmenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
