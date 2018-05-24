import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges/badges.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ChipsComponent } from './chips/chips.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { MatCardModule, MatIconModule, MatChipsModule, MatButtonModule, MatProgressSpinnerModule, MatBadgeModule, MatRadioModule, MatSliderModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatRadioModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    BadgesComponent,
    IconsComponent,
    ButtonsComponent,
    ChipsComponent,
    SpinnerComponent
  ],
  exports:[
    BadgesComponent,
    IconsComponent,
    ButtonsComponent,
    ChipsComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
