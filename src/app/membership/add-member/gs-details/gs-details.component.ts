import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gs-details',
  templateUrl: './gs-details.component.html',
  styleUrls: ['./gs-details.component.scss']
})
export class GsDetailsComponent implements OnInit {
  @Input ('parentForm')
  public parentForm: FormGroup;
  @Input() memberChild: any;
  constructor() { }

  ngOnInit() {
  }

}
