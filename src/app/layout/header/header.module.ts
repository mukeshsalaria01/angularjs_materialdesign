import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule, 
  MatButtonModule, 
  MatMenuModule, 
  MatIconModule, 
  MatDividerModule, 
  MatToolbarModule, 
  MatSidenavModule,             
  MatListModule} from "@angular/material";


@NgModule({
  imports: [
    RouterModule ,
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule  ,  
  ],
  exports:[
    HeaderComponent
  ],

  declarations: [HeaderComponent]
})
export class HeaderModule { }
