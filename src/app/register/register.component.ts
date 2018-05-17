import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm= this.formBuilder.group({
      'userName': ['', [Validators.required, Validators.minLength(5), Validators.pattern('[\\w\\-\\ss\\/]+')]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
      'rePassword': ['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

 

  registerUser(data){
    console.log(data);
  }

}
