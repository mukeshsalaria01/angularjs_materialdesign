import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  DashboardComponent
} from './dashboard.component';
import {
  ChartsComponent
} from './charts/charts.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  data: {
    breadcrumb: "Dashboard"
  },
  children: [{
      path: '',
      component: ChartsComponent,
      data: {
        breadcrumb: "Charts"
      }
    },
    {
      path: 'charts',
      component: ChartsComponent,
      data: {
        breadcrumb: "Charts"
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
