import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {
@Input('parentForm')
public parentForm: FormGroup;
@Input() memberChild: any;

  gender = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];
  selecetedFile :File ;
   profilePicture = false;
   imgUrl ='' ;

   onFileSelected(event:any){
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();  
      reader.onload = (event:any) => {
        this.imgUrl = event.target.result;       
      }  
      reader.readAsDataURL(event.target.files[0]);
     
    }
    console.log(this.imgUrl );
   }  

  constructor() { }

  ngOnInit() {
   // console.log(this.memberChild);
  }
  
 

}
