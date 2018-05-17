import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewMemberService } from '../../services/new-member.service';
import { forEach } from '@angular/router/src/utils/collection';
import {Router,ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit { 
   addMemberForm: FormGroup;
   member: any;
   userId: number;

  constructor(fBuilder: FormBuilder, private newMember: NewMemberService, 
              private router: Router,
              private activatedRoute: ActivatedRoute
            ) {
    this.addMemberForm = fBuilder.group({
      'index':  ['', Validators.required],
      'basicDetails': fBuilder.group({
        
        'fName': ['', Validators.required],
        'lName': ['', Validators.required],
        'mName': ['', Validators.required],
        'nName': ['', Validators.required],
        'title': ['', Validators.required],
        'gender': ['', Validators.required],
        'dob': ['', Validators.required],
        'membershipNumber': ['', Validators.required],
        'sinNumber': ['', Validators.required],
      }),
      'address': fBuilder.group({
        'address1': ['', Validators.required],
        'address2': ['', Validators.required],
        'city': ['', Validators.required],
        'country': ['', Validators.required],
        'province': ['', Validators.required],
        'postal': ['', Validators.required],
        'email': ['', Validators.required],
        'addressEffectiveSince': ['', Validators.required],
        'validAddress': ['', Validators.required],
        'region': ['', Validators.required],
        'branch': ['', Validators.required],
      }),
      'gsDetails': fBuilder.group({
        'isMember': ['', Validators.required],
        'marker': ['', Validators.required],
        'gsEffectiveDate': ['', Validators.required],
        'lastNotInGsDate': ['', Validators.required],
      }),
      'groupName': fBuilder.group({
        'membershipEffectiveSince': ['', Validators.required],
        'membershipStatus': ['', Validators.required],
        'class': ['', Validators.required],
        'classType': ['', Validators.required],
        'classEffective': ['', Validators.required],
        'classLevel': ['', Validators.required],
        'rsapNumber': ['', Validators.required],
        'rsapStatus': ['', Validators.required],
        'rstatusEffective': ['', Validators.required],
        'availabilty': ['', Validators.required],
        'organization': ['', Validators.required],
        'local': ['', Validators.required],
      })
    })
  }
  
  ngOnInit() { 
    this.getMember();
  }

  addNewMember(formdata) {
    let arrayObj = [];
    let members = JSON.parse(localStorage.getItem('data'));    
    console.log(members.length);
    if(formdata.index) {         
      members.splice(formdata.index,1);
      members.push(formdata);
      localStorage["data"] = JSON.stringify(members);     
    } 
    else {         
         if (members) {
          members.forEach(element => { arrayObj.push(element); });
          localStorage.removeItem("data");
          arrayObj.push(formdata);
          localStorage["data"] = JSON.stringify(arrayObj);    
        } else {
          localStorage.removeItem("data");
          arrayObj.push(formdata);
          localStorage["data"] = JSON.stringify(arrayObj);
        }          
     }   
    //alert('Data saved successfully!');
     this.router.navigate(['/membership/edit-members']);
  }

  getMember(){
    let members = JSON.parse(localStorage.getItem('data'));   
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['id'] ){
      this.userId = params['id'];
     this.member = members.splice(this.userId,1);
      }else{
        this.member= [{
          'basicDetails': {
        
            'fName': "",
            'lName': "",
            'mName': "",
            'nName': "",
            'title': "",
            'gender': "",
            'dob': "",
            'membershipNumber': "",
            'sinNumber': "",
          },
          'address':{
            'address1':"",
            'address2': "",
            'city': "",
            'country': "",
            'province': "",
            'postal': "",
            'email': "",
            'addressEffectiveSince': "",
            'validAddress': "",
            'region': "",
            'branch': "",
          },
          'gsDetails':{
            'isMember': "",
            'marker': "",
            'gsEffectiveDate': "",
            'lastNotInGsDate': "",
          },
          'groupName':{
            'membershipEffectiveSince': "",
            'membershipStatus': "",
            'class': "",
            'classType': "",
            'classEffective': "",
            'classLevel': "",
            'rsapNumber': "",
            'rsapStatus': "",
            'rstatusEffective': "",
            'availabilty': "",
            'organization': "",
            'local': "",
          }
        }];
      }
    });     
  }

 

  cancel() {
    alert('Data cancelled successfully!')
  }

}
