import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSideLoesungenTabletComponent } from './bar-side-loesungen-tablet.component';

describe('BarSideLoesungenTabletComponent', () => {
  let component: BarSideLoesungenTabletComponent;
  let fixture: ComponentFixture<BarSideLoesungenTabletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSideLoesungenTabletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSideLoesungenTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
