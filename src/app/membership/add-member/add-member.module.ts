import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMemberRoutingModule } from './add-member-routing.module';
import { AddMemberComponent } from './add-member.component';
import { AddressComponent } from './address/address.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { GroupNameComponent } from './group-name/group-name.component';
import { GsDetailsComponent } from './gs-details/gs-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, 
  MatDividerModule, 
  MatFormFieldModule,
 MatCheckboxModule, 
 MatGridListModule,
 MatInputModule,
 MatDatepickerModule,
 MatSelectModule,
 MatSlideToggleModule,
 MatButtonModule,
 MatDialogModule,
 MatIconModule,
 MatTableModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddNumberDialogComponent } from './address/add-number-dialog/add-number-dialog.component';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    AddMemberRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatIconModule,
    CdkTableModule,
    MatTableModule
  ],
  declarations: [AddMemberComponent, AddressComponent, BasicDetailsComponent, GroupNameComponent, GsDetailsComponent, AddNumberDialogComponent],
  entryComponents:[AddNumberDialogComponent]
})
export class AddMemberModule { }
