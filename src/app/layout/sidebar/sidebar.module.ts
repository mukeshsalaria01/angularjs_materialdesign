import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {  MatButtonModule, MatIconModule, MatToolbarModule, MatListModule, MatMenuModule, MatSidenavModule, MatExpansionModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    FlexLayoutModule,
    MatExpansionModule
  ],
  exports:[SidebarComponent],
  declarations: [SidebarComponent]
})
export class SidebarModule { }
