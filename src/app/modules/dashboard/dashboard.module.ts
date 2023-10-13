import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyStatComponent } from './components/my-stat/my-stat.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkhoursComponent } from './components/workhours/workhours.component';




@NgModule({
  declarations: [
    DashboardComponent,
    MyStatComponent,
    WorkhoursComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
