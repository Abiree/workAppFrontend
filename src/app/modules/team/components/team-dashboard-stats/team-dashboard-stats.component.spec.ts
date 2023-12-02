import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDashboardStatsComponent } from './team-dashboard-stats.component';

describe('TeamDashboardStatsComponent', () => {
  let component: TeamDashboardStatsComponent;
  let fixture: ComponentFixture<TeamDashboardStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDashboardStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamDashboardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
