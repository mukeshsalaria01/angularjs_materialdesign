import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  basicFormGroup: FormGroup;

  constructor( fBuilder: FormBuilder) {
    this.basicFormGroup = fBuilder.group({
      name: ['', Validators.required],
      email: ['',  [Validators.required, Validators.email]],
      phone: ['',  [Validators.required, Validators.pattern('^[0-9]*$')]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit() {
  }

  basicFormSubmit(data){
    console.log(data);
  }

}
