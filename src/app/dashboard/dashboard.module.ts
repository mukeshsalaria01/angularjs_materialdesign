import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../layout/header/header.module';
import { FooterModule } from '../layout/footer/footer.module';
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
        MatFormFieldModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { SidebarModule } from '../layout/sidebar/sidebar.module';
import { BreadcrumbModule } from '../layout/breadcrumb/breadcrumb.module';
import { TablesComponent } from './tables/tables.component';
import {MatTableModule} from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    FooterModule,
    FlexLayoutModule,
    MatCardModule,
    ChartsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SidebarModule,
    MatExpansionModule,
    BreadcrumbModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    DataTablesModule
  ],
  declarations: [DashboardComponent,ChartsComponent, TablesComponent]
})
export class DashboardModule { }
