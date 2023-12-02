import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamDashboardComponent } from './pages/team-dashboard/team-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamDashboardStatsComponent } from './components/team-dashboard-stats/team-dashboard-stats.component';

@NgModule({
  declarations: [TeamDashboardComponent, TeamDashboardStatsComponent],
  imports: [CommonModule, TeamRoutingModule, SharedModule],
})
export class TeamModule {}
