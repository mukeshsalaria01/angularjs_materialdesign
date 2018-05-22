import { Injectable } from '@angular/core';
import { NewMember } from '../classes/new-member';


@Injectable()
export class NewMemberService {

  private newMemeber: NewMember ;
  constructor() { }

  public addMember(member ): void{
    localStorage["newData"] = JSON.stringify(member);  
  }

  public getMember(){
    let members = JSON.parse(localStorage.getItem('data'));    
    return members
  }

  public deleteMember(members){
    localStorage["data"] = JSON.stringify(members);
  }
  

}
