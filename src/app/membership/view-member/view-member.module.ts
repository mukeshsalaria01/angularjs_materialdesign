import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewMemberRoutingModule } from './view-member-routing.module';
import { ViewMemberComponent } from './view-member.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataTablesModule } from 'angular-datatables';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ViewMemberRoutingModule,
    FlexLayoutModule,
    DataTablesModule,
    MatCardModule

  ],
  exports: [ViewMemberComponent],
  declarations: [ViewMemberComponent]
})
export class ViewMemberModule { }
