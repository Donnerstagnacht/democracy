import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSideSubmenuComponent } from './bar-side-submenu.component';

describe('BarSideLoesungenComponent', () => {
  let component: BarSideSubmenuComponent;
  let fixture: ComponentFixture<BarSideSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSideSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSideSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
