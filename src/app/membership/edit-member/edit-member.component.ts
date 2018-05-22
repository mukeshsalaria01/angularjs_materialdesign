import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material';
//import { LayoutModule } from '../../layout/layout.module';
import { ConfirmBoxComponent } from '../../layout/confirm-box/confirm-box.component';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  members: any = [];
  member:any = [];
  constructor(private router: Router, 
              private dailog: MatDialog, ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      responsive: true,
   
    };
   
    if (localStorage.getItem('data')) {
      this.members = JSON.parse(localStorage.getItem('data'));
      this.dtTrigger.next();
      //console.log(this.members)
    }
  }
  edit(members , i) {
    let id = i;    
    if (i > -1) {
     this.member = members.splice(i, 1);
    }
    //console.log(this.member);
    this.router.navigate(['/membership/edit-member/',id] );
  }
   

  delete(members ,i) {    
   
    let dialogRef = this.dailog.open(ConfirmBoxComponent, {
      width: '450px',
      data: { name: 'User' }
    });
    dialogRef.afterClosed().subscribe(result =>{    
      if(result)
       if (i > -1) 
      members.splice(i, 1);    
      localStorage["data"] = JSON.stringify(members);
    })


      
  }

  redirectAddMemeber(){
    this.router.navigate(['/membership/add-member'] );
  }

}
