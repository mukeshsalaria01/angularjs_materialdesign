import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../layout/header/header.module';
import { FooterModule } from '../layout/footer/footer.module';
import { ProfileComponent } from './profile.component';

import { MatCardModule, 
  MatButtonModule, 
  MatMenuModule, 
  MatIconModule, 
  MatDividerModule, 
  MatToolbarModule, 
  MatSidenavModule,             
  MatListModule,
  MatTabsModule} from "@angular/material";
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
    CommonModule,     
     FormsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    HeaderModule,
    FooterModule,
    FlexLayoutModule,
    MatTabsModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
