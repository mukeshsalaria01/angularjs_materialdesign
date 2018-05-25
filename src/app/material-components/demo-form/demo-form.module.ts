import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFormComponent } from './demo-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatStepperModule, MatAutocompleteModule, MatDatepickerModule, MatSelectModule } from '@angular/material';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { StepFormComponent } from './step-form/step-form.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule

  ],
  declarations: [DemoFormComponent, BasicFormComponent, StepFormComponent],
  exports: [DemoFormComponent]
})
export class DemoFormModule { }
