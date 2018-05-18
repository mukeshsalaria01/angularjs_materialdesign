import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembershipComponent } from './membership.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';

const routes: Routes = [
  {path:'', component: MembershipComponent,
  children:[
    { path:'', component: EditMemberComponent },
    {path: 'add-member', component: AddMemberComponent},
    {path: 'edit-members', component: EditMemberComponent},
    {path: 'edit-member/:id', component: AddMemberComponent},
    
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
