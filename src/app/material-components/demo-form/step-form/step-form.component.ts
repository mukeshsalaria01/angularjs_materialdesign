import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss']
})
export class StepFormComponent implements OnInit {

  genders = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];

  groups = [
    {value: 'a+', viewValue: 'A+'},
    {value: 'b+', viewValue: 'B+'},
    {value: 'ab+', viewValue: 'AB+'},
    {value: 'o+', viewValue: 'O+'},
    {value: 'a-', viewValue: 'A-'},
    {value: 'b-', viewValue: 'B-'},
    {value: 'ab-', viewValue: 'AB-'},
    {value: 'o-', viewValue: 'O-'}
  ];


  isLinear = true;
  loginFormGroup: FormGroup;
  bioFormGroup: FormGroup;
  contactFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder) { }   

  ngOnInit() {
 
    this.loginFormGroup = this._formBuilder.group({
      username : ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required, Validators.minLength(6)]]
    });

    this.bioFormGroup = this._formBuilder.group({
      title : ['', Validators.required],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      gender : ['', Validators.required],
      dob : ['', Validators.required],      
      bloodGroup : ['', Validators.required]
    });

    this.contactFormGroup = this._formBuilder.group({
      mobile : ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      telephone : ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      address : ['', Validators.required],
      city : ['', Validators.required],
      state : ['', Validators.required],
      postalCode : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  

  /**DatePicker */
  todayDate(){
    let today = new Date();
    let date = today.getFullYear()+', '+(today.getMonth()+1)+', '+today.getDate();
    return date;
  }
  minDate = new Date(1950, 0, 1);
  maxDate = new Date(this.todayDate());



  loginDetail(data){
    console.log(data);
  }
  bioDetail(data){
    console.log(data);
  }
  contactDetail(data){
    console.log(data);
  }

}
