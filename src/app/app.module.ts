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
import { Observable } from 'rxjs';
import { MatTableDataSource } from "@angular/material";
import { NewMemberService } from './services/new-member.service';

import { DataTablesModule } from 'angular-datatables';
import { SidebarModule } from './layout/sidebar/sidebar.module';
import { ProfileModule } from './profile/profile.module';

import { ChartsModule } from 'ng2-charts';

import { DashboardModule } from './dashboard/dashboard.module';
import { ComparePasswordDirective } from './shared/compare-password.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbModule } from './layout/breadcrumb/breadcrumb.module';
import { ConfirmBoxComponent } from './layout/confirm-box/confirm-box.component';
import { ConfirmBoxModule } from './layout/confirm-box/confirm-box.module';




@NgModule({
  declarations: [
    AppComponent,
    ComparePasswordDirective,  
    NotFoundComponent ,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    LayoutModule,
    CdkTableModule,
    DataTablesModule,
    ProfileModule,
    ChartsModule,
    DashboardModule,
    BreadcrumbModule,
    ConfirmBoxModule
 
    
  ],
  providers: [NewMemberService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmBoxComponent]
})
export class AppModule { }
