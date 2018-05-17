import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './layout/header/header.module';
import { LayoutModule } from './layout/layout.module';
import { FooterModule } from './layout/footer/footer.module';

import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from "@angular/material";
import { NewMemberService } from './services/new-member.service';

import { DataTablesModule } from 'angular-datatables';
import { SidebarModule } from './layout/sidebar/sidebar.module';
import { ProfileModule } from './profile/profile.module';

import { ChartsModule } from 'ng2-charts';

import { DashboardModule } from './dashboard/dashboard.module';
import { ComparePasswordDirective } from './shared/compare-password.directive';




@NgModule({
  declarations: [
    AppComponent,
       ComparePasswordDirective
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    LayoutModule,
    CdkTableModule,
    DataTablesModule,
    ProfileModule,
    ChartsModule,
    DashboardModule

 
    
  ],
  providers: [NewMemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
