import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../shared/material.module';
import { HeaderModule } from '../layout/header/header.module';
import { FooterModule } from '../layout/footer/footer.module';
import { SidebarModule } from '../layout/sidebar/sidebar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbModule } from '../layout/breadcrumb/breadcrumb.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    FlexLayoutModule,
    BreadcrumbModule
  ],
  declarations: [HomeComponent, IndexComponent]
})
export class HomeModule { }
