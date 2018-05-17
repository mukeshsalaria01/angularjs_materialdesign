import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-name',
  templateUrl: './group-name.component.html',
  styleUrls: ['./group-name.component.scss']
})
export class GroupNameComponent implements OnInit {
  @Input ('parentForm')
  public parentForm: FormGroup;
  @Input() memberChild: any;
  
  membershipStatus = [
    {value: 'valid', viewValue: 'Valid'},
    {value: 'noValid', viewValue: 'Not Valid'}

  ];
  classes=[
    {value: 'first', viewValue: 'First Class'},
    {value: 'second', viewValue: 'Second Class'},
    {value: 'third', viewValue: 'Third Class'}
  ];

  classesType=[
    {value: 'type1', viewValue: 'Class type 1'},
    {value: 'type2', viewValue: 'Class type 2'},
    {value: 'type3', viewValue: 'Class type 3'}
  ];

  classesEffective=[
    {value: 'first', viewValue: 'First '},
    {value: 'second', viewValue: 'Second '},
    {value: 'third', viewValue: 'Third '}
  ];

  classesLevel=[
    {value: 'one', viewValue: 'Level One'},
    {value: 'two', viewValue: 'Level Two'},
    {value: 'three', viewValue: 'Level Three'}
  ];

  rsapStatuses=[
    {value: 'one', viewValue: 'Status One'},
    {value: 'two', viewValue: 'Status Two'},
    {value: 'three', viewValue: 'Status Three'}
  ];

  availabilities=[
    {value: 'available', viewValue: 'Available'},
    {value: 'notavailable', viewValue: 'Not Available'}   
  ];

  organizations=[
    {value: 'organization', viewValue: 'Organization 1'},
    {value: 'organization2', viewValue: 'Organization 2'}   
  ];

  locals=[
    {value: 'local1', viewValue: 'Local 1'},
    {value: 'local2', viewValue: 'Local 2'}   
  ];
  constructor() { }

  ngOnInit() {
  }

}
