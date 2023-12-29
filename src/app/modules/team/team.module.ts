import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamDashboardComponent } from './pages/team-dashboard/team-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamDashboardStatsComponent } from './components/team-dashboard-stats/team-dashboard-stats.component';
import { TeamActivityComponent } from './components/team-activity/team-activity.component';
import { TableComponent } from './components/table/table.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';

@NgModule({
  declarations: [
    TeamDashboardComponent,
    TeamDashboardStatsComponent,
    TeamActivityComponent,
    TableComponent,
    TeamMemberComponent,
  ],
  imports: [CommonModule, TeamRoutingModule, SharedModule],
})
export class TeamModule {}
