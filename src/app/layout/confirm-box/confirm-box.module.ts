import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmBoxComponent } from './confirm-box.component';
import { MatIconModule, MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ConfirmBoxComponent],
  exports: [ConfirmBoxComponent]
})
export class ConfirmBoxModule { }
