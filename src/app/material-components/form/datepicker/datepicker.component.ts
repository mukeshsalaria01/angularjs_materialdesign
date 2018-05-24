import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/**Start Date */
startDate = new Date(1990, 0, 1);

/*Date Range*/
minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  /**selected value< */
  serializedDate = new FormControl((new Date()).toISOString());

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  
}
