import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberControllerComponent } from './team-member-controller.component';

describe('TeamMemberControllerComponent', () => {
  let component: TeamMemberControllerComponent;
  let fixture: ComponentFixture<TeamMemberControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
