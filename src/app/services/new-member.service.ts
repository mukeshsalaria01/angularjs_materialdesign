import { Injectable } from '@angular/core';
import { NewMember } from '../classes/new-member';


@Injectable()
export class NewMemberService {

  private newMemeber: NewMember ;
  constructor() { }

  public addMember( ): void{
    let newMember = new NewMember()
  }

  

}
