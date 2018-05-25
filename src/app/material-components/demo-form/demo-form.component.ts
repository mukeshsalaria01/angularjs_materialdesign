import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {

  basicForm: FormGroup;

  constructor(public fBuiilder: FormBuilder) { 
      this.basicForm = this.fBuiilder.group({
        
      })

  }

  ngOnInit() {
  }

  basicFormSubmit(data){
    console.log(data);
  }

}
