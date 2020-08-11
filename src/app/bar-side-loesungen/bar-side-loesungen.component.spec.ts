import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSideLoesungenComponent } from './bar-side-loesungen.component';

describe('BarSideLoesungenComponent', () => {
  let component: BarSideLoesungenComponent;
  let fixture: ComponentFixture<BarSideLoesungenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSideLoesungenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSideLoesungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
