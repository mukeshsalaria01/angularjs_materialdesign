import { Injectable, EventEmitter } from '@angular/core';
import { stat } from 'fs';


@Injectable()
export class SidenavService {

  getSideNavStat: any;
  sideNav: any = false;
  sideNavUpdated = new EventEmitter();

  constructor() { }

  getSideNavState(){
    return this.sideNavUpdated;
  }

  setSideNaveState(state){
    this.sideNav = state;
    this.sideNavUpdated.emit(this.sideNav);
  }

}
