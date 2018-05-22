import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export class  ConfirmComponentModel {
  confirm:string; 
  
}

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {
  name: string;
  modal:ConfirmComponentModel;
  constructor(public dialogRef : MatDialogRef<ConfirmBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

     }

  ngOnInit() {
    this.modal = new ConfirmComponentModel;
  }

  close(data){
    this.dialogRef.close(data);
  }
  confirmDelete(){      
    this.close(true);
  }    
  dismiss(){
    this.close(false);
  } 

}
