import { Component, OnInit, } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

export class  ModalComponentModel {
  number:string; 
  type: string;
  class: string;
}

@Component({
  selector: 'app-add-number-dialog',
  templateUrl: './add-number-dialog.component.html',
  styleUrls: ['./add-number-dialog.component.scss']
})
export class AddNumberDialogComponent implements OnInit {

  modal:ModalComponentModel;
  classes=[
    {value: 'primary', viewValue: 'Primary'},
    {value: 'secondary', viewValue: 'Secondary '},
    
  ];

  classesType=[
    {value: 'home', viewValue: 'Home'},
    {value: 'office', viewValue: 'Office'},
   
  ];

  addNemberForm: FormGroup;
  constructor(private dialogRef : MatDialogRef<AddNumberDialogComponent>,
              private fBuilder: FormBuilder) { 
                this.addNemberForm= fBuilder.group({
                    'type': ['', Validators.required],
                    'class': ['', Validators.required],
                    'number': ['', Validators.required],
                })
  }

  ngOnInit() {
    this.modal = new ModalComponentModel;
  }
  save(number){
    
    
    console.log(number)
    this.dialogRef.close(this.modal);
  }

  dismiss(){
    this.dialogRef.close(null);
  }

  number = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.number.hasError('required') ? 'You must enter a value' : '';
  }
}

