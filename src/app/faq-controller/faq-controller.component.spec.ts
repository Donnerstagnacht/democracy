import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqControllerComponent } from './faq-controller.component';

describe('FaqControllerComponent', () => {
  let component: FaqControllerComponent;
  let fixture: ComponentFixture<FaqControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
