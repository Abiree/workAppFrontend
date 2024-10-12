import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDashboardComponent } from './pages/team-dashboard/team-dashboard.component';
import { TeamMemberDetailsComponent } from './pages/team-member-details/team-member-details.component';

const routes: Routes = [
  {
    path: '',
    component: TeamDashboardComponent,
  },
  { path: ':caller', component: TeamMemberDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
