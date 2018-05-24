import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  availabilities = [    
    { status: 'Present', color: 'primary' },
    { status: 'Leave', color: 'accent' },
    { status: 'Absent', color: 'warn' }
  ];
}
