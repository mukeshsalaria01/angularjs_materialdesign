import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {path: '' , component: DashboardComponent,
    children:[
      {path: '', component: ChartsComponent},
      {path:'charts', component: ChartsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
