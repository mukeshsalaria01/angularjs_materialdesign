import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { LayoutComponent } from './layout.component';

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
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [LayoutComponent,  ]
})
export class LayoutModule { }
