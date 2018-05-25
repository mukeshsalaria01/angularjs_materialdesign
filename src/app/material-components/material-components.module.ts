import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialComponentsRoutingModule } from './material-components-routing.module';
import { MaterialComponentsComponent } from './material-components.component';
import { HeaderModule } from '../layout/header/header.module';
import { FooterModule } from '../layout/footer/footer.module';
import { SidebarModule } from '../layout/sidebar/sidebar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, 
  MatSidenavModule, 
  MatListModule, 
  MatToolbar, 
  MatIcon, 
  MatToolbarModule, 
  MatIconModule, 
  MatButtonModule, 
  MatExpansionModule, 
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldControl,
  MatFormFieldModule,
  MatBadgeModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSliderModule,
  MatTableModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from './form/form.module';
import { TablesComponent } from './tables/tables.component';
import { FormComponent } from './form/form.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentsModule } from './components/components.module';
import { DemoFormModule } from './demo-form/demo-form.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsRoutingModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    DataTablesModule,
    MatButtonModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ComponentsModule,
    DemoFormModule

  ],
  declarations: [MaterialComponentsComponent,
                  TablesComponent,                 
                  ComponentsComponent
                ]
})
export class MaterialComponentsModule { }
