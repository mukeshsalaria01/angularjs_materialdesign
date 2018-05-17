import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditMemberRoutingModule } from './edit-member-routing.module';
import { EditMemberComponent } from './edit-member.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataTablesModule } from 'angular-datatables';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    EditMemberRoutingModule,
    FlexLayoutModule,
    DataTablesModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [EditMemberComponent]
})
export class EditMemberModule { }
