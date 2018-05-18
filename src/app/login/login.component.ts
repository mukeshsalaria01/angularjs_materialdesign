import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    userLoginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.userLoginForm = formBuilder.group({
      'userName' : ['', Validators.required],
      'password' : ['', Validators.required],
    })
   }

  ngOnInit() {
  }

  

}
