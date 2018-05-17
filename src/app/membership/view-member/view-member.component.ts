import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  members:any =[];

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  if (localStorage.getItem('data')){
    this.members = JSON.parse(localStorage.getItem('data'));    
      this.dtTrigger.next();
      //console.log(this.members)
    }
  }
}
