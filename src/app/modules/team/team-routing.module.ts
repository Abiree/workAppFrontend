import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDashboardComponent } from './pages/team-dashboard/team-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: TeamDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
