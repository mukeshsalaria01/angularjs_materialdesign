import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  exports:[ FooterComponent ],
  declarations: [FooterComponent]
})
export class FooterModule { }
