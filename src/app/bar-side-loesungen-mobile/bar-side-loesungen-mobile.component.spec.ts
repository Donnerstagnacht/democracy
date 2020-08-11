import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSideLoesungenMobileComponent } from './bar-side-loesungen-mobile.component';

describe('BarSideLoesungenMobileComponent', () => {
  let component: BarSideLoesungenMobileComponent;
  let fixture: ComponentFixture<BarSideLoesungenMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSideLoesungenMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSideLoesungenMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
