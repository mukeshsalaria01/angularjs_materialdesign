import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponentsComponent } from './material-components.component';
import { TablesComponent } from './tables/tables.component';
import { ComponentsComponent } from './components/components.component';
import { FormComponent } from './form/form.component';
import { DemoFormComponent } from './demo-form/demo-form.component';

const routes: Routes = [
  {path: '', component: MaterialComponentsComponent,
  data: {
    breadcrumb: "Components"
  },
  children: [{
      path: '',
      component: TablesComponent,
      data: {
        breadcrumb: "Component"
      }
    },
    {
      path: 'data-table',
      component: TablesComponent,
      data: {
        breadcrumb: "Tables"
      }
    },
    {
      path: 'buttons',
      component: ComponentsComponent,
      data: {
        breadcrumb: "Buttons"
      }
    },
    {
      path: 'form',
      component: FormComponent,
      data: {
        breadcrumb: "Form"
      }
    }    ,
    {
      path: 'form-demo',
      component: DemoFormComponent,
      data: {
        breadcrumb: "Form"
      }
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialComponentsRoutingModule { }
