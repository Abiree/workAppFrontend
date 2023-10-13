import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const routes: Routes = [ {
  path: '',
  component: AppLayoutComponent,
  children: [
  {path: 'dashboard',loadChildren: () =>import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  // {path: 'services',loadChildren: () =>import('./modules/service/service.module').then(m => m.ServiceModule) },
  // {path: 'auth',loadChildren: () =>import('./modules/auth/auth.module').then(m => m.AuthModule)},
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
  ]
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
