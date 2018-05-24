import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatCardModule, 
         MatSliderModule, 
         MatSlideToggleModule, 
         MatFormFieldModule, 
         MatCheckboxModule, 
         MatInputModule, 
         MatSelectModule, 
         MatRadioButton, 
         MatRadioModule, 
         MatAutocompleteModule,
         MatDatepickerModule,
         MatButtonModule,
         MatIconModule} from '@angular/material';
import { FormComponent } from './form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule

  ],
  declarations: [FormComponent,
    AutocompleteComponent,
                  DatepickerComponent, 
                  FormFieldComponent, 
                  InputComponent, 
                  RadioButtonComponent, 
                  SelectComponent, 
                  SliderComponent, 
                  SlideToggleComponent,
                  CheckboxComponent
                ],
  exports:[     FormComponent,
    AutocompleteComponent,
                  DatepickerComponent, 
                  FormFieldComponent, 
                  InputComponent, 
                  RadioButtonComponent, 
                  SelectComponent, 
                  SliderComponent, 
                  SlideToggleComponent,
                  CheckboxComponent
  ]
})
export class FormModule { }
