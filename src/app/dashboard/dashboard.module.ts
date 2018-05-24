import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../layout/header/header.module';
import { FooterModule } from '../layout/footer/footer.module';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { SidebarModule } from '../layout/sidebar/sidebar.module';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    FlexLayoutModule,
    MatCardModule,
    ChartsModule,
    
    
  ],
  declarations: [DashboardComponent,
                ChartsComponent, 
            ]
})
export class DashboardModule { }
