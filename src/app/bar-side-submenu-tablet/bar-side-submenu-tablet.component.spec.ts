import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSideSubmenuTabletComponent } from './bar-side-submenu-tablet.component';

describe('BarSideLoesungenTabletComponent', () => {
  let component: BarSideSubmenuTabletComponent;
  let fixture: ComponentFixture<BarSideSubmenuTabletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSideSubmenuTabletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSideSubmenuTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
