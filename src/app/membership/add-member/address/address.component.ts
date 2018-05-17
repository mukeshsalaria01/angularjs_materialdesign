import { Component, OnInit ,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddNumberDialogComponent } from './add-number-dialog/add-number-dialog.component';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from "@angular/material";

import 'rxjs/add/observable/of';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
@Input('parentForm')
public parentForm: FormGroup;
@Input() memberChild: any;

  countries= [
    {value: 'Canada', viewValue: 'Canada'},
    {value: 'India', viewValue: 'India'},
    {value: 'USA', viewValue: 'USA'},    
  ]
  provinces=[
    {value: 'AB', viewValue: 'Alberta'},
    {value: 'BC', viewValue: 'British Columbia'},
    {value: 'ON', viewValue: 'Ontario'},
    {value: 'QB', viewValue: 'Quebec'}
  ]

  regions=[
    {value: 'Atlantic Canada', viewValue: 'Atlantic Canada'},
    {value: 'Central Canada', viewValue: 'Central Canada'},
    {value: 'Canadian Prairies', viewValue: 'Canadian Prairies'}
  ]

  branches=[
    {value: 'Branch1', viewValue: 'Branch 1'},
    {value: 'Branch2', viewValue: 'Branch 2'},
    {value: 'Branch3', viewValue: 'Branch 3'}
  ]

  data=[
    {type: 'Home', class: 'Primary', number: '1268964'},
    {type: 'Office', class: 'Secondary', number: '9876532'},
   ]
addNewNumber:userNumber[];

  constructor( private dailog: MatDialog) { }

  ngOnInit() {
  
  }

  openAddNumberDialog(){
    let dialogRef = this.dailog.open(AddNumberDialogComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result =>{
      
      //this.addNewNumber =  Array(result);
      // other.push(item)
      console.log( this.addNewNumber);
    })
  }

  removeNumber(e){
    alert("index"+ e);
  }

  

}

export interface userNumber{
  number:number;
  class:string;
  type:string;
}