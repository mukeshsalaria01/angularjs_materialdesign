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
import { TablesComponent } from './tables/tables.component';

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
    },
    {
      path: 'data-table',
      component: TablesComponent,
      data: {
        breadcrumb: "Data Tables"
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
